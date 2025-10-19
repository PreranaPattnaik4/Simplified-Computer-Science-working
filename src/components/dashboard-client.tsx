'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useFirestoreStream } from '@/hooks/use-firestore-stream';
import type { Task, Alert } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { TaskList } from '@/components/task-list';
import { AlertList } from '@/components/alert-list';
import { HealthAssistant } from '@/components/health-assistant';
import { createTaskAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { CommandSimulator } from './command-simulator';

const formSchema = z.object({
  goal: z.string().min(10, {
    message: 'Please enter a goal with at least 10 characters.',
  }),
});

export function DashboardClient({
  initialTasks,
  initialAlerts,
}: {
  initialTasks: Task[];
  initialAlerts: Alert[];
}) {
  const tasks = useFirestoreStream<Task>('tasks', initialTasks);
  const alerts = useFirestoreStream<Alert>('alerts', initialAlerts, {
    where: [['status', '==', 'new']],
  });
  
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goal: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await createTaskAction(values.goal);
      if (result.success) {
        toast({
          title: 'Task Created',
          description: `"${values.goal}" is now in progress.`,
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error,
        });
      }
    });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 md:p-8">
      <div className="lg:col-span-2 space-y-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-4">
            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Enter a high-level goal, e.g., 'Patch all production servers'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending} className="h-10">
              {isPending ? 'Creating...' : 'Create Task'}
            </Button>
          </form>
        </Form>
        
        <AlertList alerts={alerts} />
        <TaskList tasks={tasks} />
      </div>
      <div className="lg:col-span-1 space-y-8">
        <div className="flex justify-end">
            <CommandSimulator />
        </div>
        <HealthAssistant />
      </div>
    </div>
  );
}
