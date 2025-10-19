export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'failed' | 'superseded';

export type Step = {
  description: string;
  status: TaskStatus;
  log?: string;
};

// Type for data coming from Firestore (could have ISO strings for dates)
export type Task = {
  id: string;
  goal: string;
  steps: Step[];
  status: TaskStatus;
  createdAt: string; // ISO string
  reportId?: string;
  failureLog?: string;
};

export type Alert = {
  id:string;
  title: string;
  description: string;
  timestamp: string; // ISO string
  status: 'new' | 'resolved';
};

export type Report = {
  id: string;
  taskId: string;
  content: string; // Markdown content
  createdAt: string; // ISO string
};

export type ChatRole = 'user' | 'model';

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export type SystemHealth = {
    cpuLoad: number;
    memoryUsage: number;
    diskSpaceRemaining: number;
};
