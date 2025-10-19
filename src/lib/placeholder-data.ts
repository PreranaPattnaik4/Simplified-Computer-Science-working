import { Timestamp } from 'firebase-admin/firestore';
import type { Alert, Task } from './types';

export const mockAlerts: Omit<Alert, 'id'>[] = [
  {
    title: 'High CPU on Cache Server',
    description: 'CPU utilization has exceeded 95% for the last 15 minutes on server `cache-01`.',
    timestamp: Timestamp.now(),
    status: 'new',
  },
  {
    title: 'Database Connection Pool Exhausted',
    description: 'The primary database `pg-main-master` has run out of available connections.',
    timestamp: Timestamp.fromDate(new Date(Date.now() - 1000 * 60 * 30)),
    status: 'new',
  },
];

export const mockTasks: Omit<Task, 'id'>[] = [
    {
        goal: 'Deploy latest web application update to production',
        steps: [
            { description: 'Pull latest from git main branch', status: 'completed', log: 'OK' },
            { description: 'Install dependencies with npm', status: 'completed', log: 'Dependencies installed successfully.' },
            { description: 'Build production assets', status: 'completed', log: 'Build successful.'},
            { description: 'Run automated tests', status: 'pending' },
            { description: 'Push to production servers', status: 'pending' },
            { description: 'Restart production servers', status: 'pending' },
        ],
        status: 'in-progress',
        createdAt: Timestamp.now(),
    },
    {
        goal: 'Reboot staging database server',
        steps: [
          { description: 'Connect to staging server via SSH', status: 'completed', log: 'Connection successful.' },
          { description: 'Issue reboot command', status: 'failed', log: 'ERROR: Permission denied.' },
          { description: 'Verify server is back online', status: 'pending' },
        ],
        status: 'failed',
        failureLog: 'Permission denied when issuing reboot command. User `automation-agent` may not have sudo privileges.',
        createdAt: Timestamp.fromDate(new Date(Date.now() - 1000 * 60 * 60 * 2)), // 2 hours ago
    },
    {
        goal: 'Backup user database',
        steps: [
          { description: 'Connect to database', status: 'completed', log: 'OK' },
          { description: 'Perform pg_dump', status: 'completed', log: 'Dump successful.' },
          { description: 'Compress backup file', status: 'completed', log: 'Compression successful.' },
          { description: 'Upload to S3 cold storage', status: 'completed', log: 'Upload complete.' },
        ],
        status: 'completed',
        createdAt: Timestamp.fromDate(new Date(Date.now() - 1000 * 60 * 60 * 24)), // 1 day ago
    }
];
