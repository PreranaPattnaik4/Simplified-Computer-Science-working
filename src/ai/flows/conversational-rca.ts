'use server';

/**
 * @fileOverview Answers user questions about system health by querying Firestore data.
 *
 * - conversationalRca - A function that handles answering user questions about system health.
 * - ConversationalRcaInput - The input type for the conversationalRca function.
 * - ConversationalRcaOutput - The return type for the conversationalRca function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {getTasksByStatus, getSystemHealth, getRcaReportSummary} from '@/lib/firestore-helpers';

const ConversationalRcaInputSchema = z.object({
  query: z.string().describe('The user query about system health.'),
});
export type ConversationalRcaInput = z.infer<typeof ConversationalRcaInputSchema>;

const ConversationalRcaOutputSchema = z.object({
  answer: z.string().describe('The AI generated answer to the user query.'),
});
export type ConversationalRcaOutput = z.infer<typeof ConversationalRcaOutputSchema>;

export async function conversationalRca(input: ConversationalRcaInput): Promise<ConversationalRcaOutput> {
  return conversationalRcaFlow(input);
}

const getTasksByStatusTool = ai.defineTool({
  name: 'getTasksByStatus',
  description: 'Retrieves tasks from Firestore based on their status.',
  inputSchema: z.object({
    status: z.string().describe('The status of the tasks to retrieve (e.g., in-progress, completed, failed).'),
  }),
  outputSchema: z.array(z.any()), // Assuming tasks are generic objects
}, async (input) => {
  return await getTasksByStatus(input.status);
});

const getSystemHealthTool = ai.defineTool({
  name: 'getSystemHealth',
  description: 'Retrieves overall system health information from Firestore.',
  inputSchema: z.object({}),
  outputSchema: z.object({
    cpuLoad: z.number().describe('Current CPU load as a percentage'),
    memoryUsage: z.number().describe('Current memory usage as a percentage'),
    diskSpaceRemaining: z.number().describe('Remaining disk space in GB'),
  }),
}, async () => {
  return await getSystemHealth();
});

const getRcaReportSummaryTool = ai.defineTool({
  name: 'getRcaReportSummary',
  description: 'Retrieves a summary of a Root Cause Analysis (RCA) report from Firestore by task ID.',
  inputSchema: z.object({
    taskId: z.string().describe('The ID of the task for which to retrieve the RCA report summary.'),
  }),
  outputSchema: z.string(), // Assuming the summary is a string
}, async (input) => {
  return await getRcaReportSummary(input.taskId);
});

const prompt = ai.definePrompt({
  name: 'conversationalRcaPrompt',
  tools: [getTasksByStatusTool, getSystemHealthTool, getRcaReportSummaryTool],
  input: {schema: ConversationalRcaInputSchema},
  output: {schema: ConversationalRcaOutputSchema},
  prompt: `You are a helpful AI assistant designed to answer questions about the system's health.

  Use the available tools to retrieve information from Firestore and provide accurate and informative answers.

  Here are the available tools:
  - getTasksByStatus: Retrieves tasks by status.
  - getSystemHealth: Retrieves overall system health information.
  - getRcaReportSummary: Retrieves a summary of an RCA report by task ID.

  Answer the following question:
  {{query}}
`,
});

const conversationalRcaFlow = ai.defineFlow(
  {
    name: 'conversationalRcaFlow',
    inputSchema: ConversationalRcaInputSchema,
    outputSchema: ConversationalRcaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
