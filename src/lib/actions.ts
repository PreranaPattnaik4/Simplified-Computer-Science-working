'use server';

import { revalidatePath } from 'next/cache';
import { multiStepTaskExecution } from '@/ai/flows/multi-step-task-execution';
import { proactiveIssueResolution } from '@/ai/flows/proactive-issue-resolution';
import { taskSelfHealing } from '@/ai/flows/task-self-healing';
import { generateRcaReport } from '@/ai/flows/rca-report-generation';
import { simulateCommand } from '@/ai/flows/command-simulation';
import { conversationalRca } from '@/ai/flows/conversational-rca';
import { generateSpeech } from '@/ai/flows/tts';
import {
  createTaskInFirestore,
  getTaskFromFirestore,
  updateTaskStatusInFirestore,
  updateStepStatusInFirestore,
  saveReportToFirestore,
  updateAlertStatusInFirestore,
} from './firestore-helpers';
import type { Alert, Task, ChatMessage } from './types';

// Helper for structured responses
type ActionResponse<T> = { success: true; } & T | { success: false; error: string; };

export async function createTaskAction(goal: string): Promise<ActionResponse<{ taskId: string }>> {
  try {
    const { steps } = await multiStepTaskExecution(goal);
    const taskId = await createTaskInFirestore(goal, steps);
    
    // Asynchronously start the simulation without blocking the UI response
    simulateTaskExecutionAction(taskId);

    revalidatePath('/');
    return { success: true, taskId };
  } catch (error) {
    console.error('createTaskAction failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred.' };
  }
}

export async function resolveAlertAction(alert: Alert): Promise<ActionResponse<{ goal: string }>> {
    try {
        const { goal } = await proactiveIssueResolution({ title: alert.title, description: alert.description });
        await createTaskAction(goal);
        await updateAlertStatusInFirestore(alert.id, 'resolved');

        revalidatePath('/');
        return { success: true, goal };
    } catch (error) {
        console.error('resolveAlertAction failed:', error);
        return { success: false, error: 'Failed to generate or start resolution task.' };
    }
}

export async function retryTaskAction(task: Task): Promise<ActionResponse<{ newGoal: string }>> {
    if (!task.failureLog) {
        return { success: false, error: 'No failure log available to analyze for retry.' };
    }
    try {
        const { newGoal } = await taskSelfHealing({ goal: task.goal, failureLog: task.failureLog });
        await createTaskAction(newGoal);
        await updateTaskStatusInFirestore(task.id, 'superseded');

        revalidatePath('/');
        return { success: true, newGoal };
    } catch (error) {
        console.error('retryTaskAction failed:', error);
        return { success: false, error: 'Failed to generate or start retry task.' };
    }
}

export async function generateRcaReportAction(taskId: string): Promise<ActionResponse<{ report: string }>> {
    try {
        const task = await getTaskFromFirestore(taskId);
        if (!task) {
            throw new Error('Task not found.');
        }

        const logs = task.steps.map(step => `[${step.status}] ${step.description}: ${step.log || 'No output'}`);
        if(task.failureLog) {
            logs.push(`[FAILURE] ${task.failureLog}`);
        }
        
        const report = await generateRcaReport({ goal: task.goal, logs });
        await saveReportToFirestore(taskId, report);

        revalidatePath('/');
        return { success: true, report };
    } catch (error) {
        console.error('generateRcaReportAction failed:', error);
        return { success: false, error: 'Failed to generate RCA report.' };
    }
}

export async function simulateCommandAction(command: string): Promise<ActionResponse<{ output: string }>> {
    try {
        const output = await simulateCommand(command);
        return { success: true, output };
    } catch (error) {
        console.error('simulateCommandAction failed:', error);
        return { success: false, error: 'Failed to simulate command.' };
    }
}

export async function askHealthAssistantAction(messages: ChatMessage[]): Promise<ActionResponse<{ response: string }>> {
    const query = messages[messages.length - 1]?.content;
    if (!query) {
        return { success: false, error: 'No user query found.' };
    }

    try {
        const { answer } = await conversationalRca({ query });
        return { success: true, response: answer };
    } catch (error) {
        console.error('askHealthAssistantAction failed:', error);
        return { success: false, error: 'The health assistant could not process your request.' };
    }
}

export async function generateSpeechAction(text: string): Promise<ActionResponse<{ audioUri: string }>> {
    try {
        const { media } = await generateSpeech(text);
        return { success: true, audioUri: media };
    } catch (error) {
        console.error('generateSpeechAction failed:', error);
        return { success: false, error: 'Failed to generate speech.' };
    }
}

export async function simulateTaskExecutionAction(taskId: string): Promise<void> {
  // This is a long-running background process.
  // It does not return a value to the client.
  try {
    const task = await getTaskFromFirestore(taskId);
    if (!task) throw new Error('Task not found for simulation.');

    await updateTaskStatusInFirestore(taskId, 'in-progress');
    revalidatePath('/'); 

    for (let i = 0; i < task.steps.length; i++) {
      await updateStepStatusInFirestore(taskId, i, 'in-progress');
      revalidatePath('/'); // Update UI to show step in-progress

      // Simulate work with a delay
      const delay = Math.random() * 1000 + 1000; // 1-2 seconds
      await new Promise(resolve => setTimeout(resolve, delay));
      
      const simulatedLog = await simulateCommand(task.steps[i].description);
      
      await updateStepStatusInFirestore(taskId, i, 'completed', simulatedLog);
      revalidatePath('/'); // Update UI to show step completed
    }

    await updateTaskStatusInFirestore(taskId, 'completed');
    revalidatePath('/');
  } catch (error) {
    console.error(`Simulation for task ${taskId} failed:`, error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during simulation.';
    await updateTaskStatusInFirestore(taskId, 'failed', errorMessage);
    revalidatePath('/');
  }
}
