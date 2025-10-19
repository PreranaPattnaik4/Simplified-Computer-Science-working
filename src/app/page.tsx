import { DashboardLayout } from '@/components/dashboard-layout';
import { DashboardClient } from '@/components/dashboard-client';
import { mockTasks, mockAlerts } from '@/lib/placeholder-data';
import type { Task, Alert } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const initialTasks = mockTasks.map((t, i) => ({...t, id: `mock-task-${i}`, createdAt: new Date().toISOString()} as Task));
  const initialAlerts = mockAlerts.map((a, i) => ({...a, id: `mock-alert-${i}`, timestamp: new Date().toISOString()} as Alert));

  return (
    <DashboardLayout>
      <DashboardClient initialTasks={initialTasks} initialAlerts={initialAlerts} />
    </DashboardLayout>
  );
}
