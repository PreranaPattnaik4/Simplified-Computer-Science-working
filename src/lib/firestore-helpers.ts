import { db } from './firebase/admin';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import type { Task, Alert, Report, Step, TaskStatus, SystemHealth } from './types';
import { mockAlerts, mockTasks } from './placeholder-data';

const TASKS_COLLECTION = 'tasks';
const ALERTS_COLLECTION = 'alerts';
const REPORTS_COLLECTION = 'reports';

// Function to seed initial data (for demo purposes)
export async function seedInitialData() {
  const tasksSnapshot = await db.collection(TASKS_COLLECTION).limit(1).get();
  if (tasksSnapshot.empty) {
    console.log('Seeding initial tasks...');
    const batch = db.batch();
    mockTasks.forEach(task => {
      const docRef = db.collection(TASKS_COLLECTION).doc();
      batch.set(docRef, task);
    });
    await batch.commit();
  }

  const alertsSnapshot = await db.collection(ALERTS_COLLECTION).limit(1).get();
  if (alertsSnapshot.empty) {
    console.log('Seeding initial alerts...');
    const batch = db.batch();
    mockAlerts.forEach(alert => {
      const docRef = db.collection(ALERTS_COLLECTION).doc();
      batch.set(docRef, alert);
    });
    await batch.commit();
  }
}

// --- Task Functions ---

export async function createTaskInFirestore(goal: string, steps: { description: string }[]): Promise<string> {
  const new_steps: Step[] = steps.map(step => ({ ...step, status: 'pending' }));
  const docRef = await db.collection(TASKS_COLLECTION).add({
    goal,
    steps: new_steps,
    status: 'pending',
    createdAt: FieldValue.serverTimestamp(),
  });
  return docRef.id;
}

export async function getTaskFromFirestore(taskId: string): Promise<Task | null> {
  const doc = await db.collection(TASKS_COLLECTION).doc(taskId).get();
  if (!doc.exists) return null;
  
  const data = doc.data() as Omit<Task, 'id'>;
  // Convert Timestamps to ISO strings for serializability
  return {
    id: doc.id,
    ...data,
    createdAt: (data.createdAt as Timestamp).toDate().toISOString(),
  } as unknown as Task;
}

export async function getTasksFromFirestore(): Promise<Task[]> {
  await seedInitialData();
  const snapshot = await db.collection(TASKS_COLLECTION).orderBy('createdAt', 'desc').get();
  return snapshot.docs.map(doc => {
    const data = doc.data() as Omit<Task, 'id'>;
    return { 
        id: doc.id,
        ...data,
        createdAt: (data.createdAt as Timestamp).toDate().toISOString(),
     } as unknown as Task;
  });
}

export async function updateTaskStatusInFirestore(taskId: string, status: TaskStatus, failureLog?: string): Promise<void> {
  const updateData: { status: TaskStatus, failureLog?: string } = { status };
  if (failureLog) {
    updateData.failureLog = failureLog;
  }
  await db.collection(TASKS_COLLECTION).doc(taskId).update(updateData);
}

export async function updateStepStatusInFirestore(taskId: string, stepIndex: number, status: TaskStatus, log?: string): Promise<void> {
  const taskRef = db.collection(TASKS_COLLECTION).doc(taskId);
  const taskDoc = await taskRef.get();
  if (!taskDoc.exists) throw new Error('Task not found');
  
  const task = taskDoc.data() as Task;
  const newSteps = [...task.steps];
  newSteps[stepIndex] = { ...newSteps[stepIndex], status, log: log || '' };
  
  await taskRef.update({ steps: newSteps });
}

// --- Alert Functions ---

export async function getAlertsFromFirestore(): Promise<Alert[]> {
    await seedInitialData();
    const snapshot = await db.collection(ALERTS_COLLECTION).orderBy('timestamp', 'desc').get();
    return snapshot.docs.map(doc => {
      const data = doc.data() as Omit<Alert, 'id'>;
      return { 
          id: doc.id,
          ...data,
          timestamp: (data.timestamp as Timestamp).toDate().toISOString(),
       } as unknown as Alert;
    });
}

export async function updateAlertStatusInFirestore(alertId: string, status: 'resolved'): Promise<void> {
    await db.collection(ALERTS_COLLECTION).doc(alertId).update({ status });
}

// --- Report Functions ---

export async function saveReportToFirestore(taskId: string, content: string): Promise<string> {
    const reportRef = await db.collection(REPORTS_COLLECTION).add({
        taskId,
        content,
        createdAt: FieldValue.serverTimestamp(),
    });
    await db.collection(TASKS_COLLECTION).doc(taskId).update({ reportId: reportRef.id });
    return reportRef.id;
}


// --- Functions for Conversational RCA Tool ---

export async function getTasksByStatus(status: string): Promise<Task[]> {
  const snapshot = await db.collection(TASKS_COLLECTION).where('status', '==', status).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));
}

export async function getSystemHealth(): Promise<SystemHealth> {
  // Returns mock data as there's no real system to monitor
  return {
    cpuLoad: Math.floor(Math.random() * 100),
    memoryUsage: Math.floor(Math.random() * 100),
    diskSpaceRemaining: Math.floor(Math.random() * 500),
  };
}

export async function getRcaReportSummary(taskId: string): Promise<string> {
  const reportQuery = await db.collection(REPORTS_COLLECTION).where('taskId', '==', taskId).limit(1).get();
  if (reportQuery.empty) {
    return 'No RCA report found for this task.';
  }
  const report = reportQuery.docs[0].data() as Report;
  // In a real scenario, you might use another AI call to summarize the content.
  // For now, we return the first 200 characters.
  return report.content.substring(0, 200) + '...';
}
