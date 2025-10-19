'use client';

import { useState, useTransition } from 'react';
import type { Task, Step } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { retryTaskAction, generateRcaReportAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import {
  Bot,
  CircleCheck,
  CircleX,
  FileText,
  Loader,
  RefreshCcw,
} from 'lucide-react';

function StepItem({ step, isCollapsed }: { step: Step; isCollapsed: boolean }) {
  const getIcon = () => {
    switch (step.status) {
      case 'completed':
        return <CircleCheck className="size-4 text-green-500" />;
      case 'failed':
        return <CircleX className="size-4 text-destructive" />;
      case 'in-progress':
        return <Loader className="size-4 animate-spin text-primary" />;
      default:
        return <div className="size-4 rounded-full border-2 border-muted-foreground" />;
    }
  };

  return (
    <div className="flex items-start gap-3">
      <div className="pt-1">{getIcon()}</div>
      <div className={cn('flex-1', isCollapsed && 'truncate')}>
        <p className="text-sm font-medium">{step.description}</p>
        {step.log && (
          <p className="text-xs text-muted-foreground font-code mt-1">{step.log}</p>
        )}
      </div>
    </div>
  );
}

function TaskCard({ task }: { task: Task }) {
  const [isRetrying, startRetryTransition] = useTransition();
  const [isGenerating, startGenerateTransition] = useTransition();
  const [reportContent, setReportContent] = useState<string | null>(null);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const { toast } = useToast();

  const completedSteps = task.steps.filter(
    (s) => s.status === 'completed'
  ).length;
  const progress =
    task.steps.length > 0 ? (completedSteps / task.steps.length) * 100 : 0;
  
  const isCollapsed = task.status !== 'in-progress';

  const handleRetry = () => {
    startRetryTransition(async () => {
      const result = await retryTaskAction(task);
      if (result.success) {
        toast({
          title: 'Task Retry Initiated',
          description: `New task created to retry: "${result.newGoal}"`,
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Retry Failed',
          description: result.error,
        });
      }
    });
  };

  const handleGenerateReport = () => {
    startGenerateTransition(async () => {
      const result = await generateRcaReportAction(task.id);
      if (result.success) {
        setReportContent(result.report);
        setIsReportOpen(true);
      } else {
        toast({
          variant: 'destructive',
          title: 'Report Generation Failed',
          description: result.error,
        });
      }
    });
  };

  const statusMap: { [key in Task['status']]: {
    variant: "default" | "secondary" | "destructive" | "outline";
    label: string;
   }} = {
    'pending': { variant: 'secondary', label: 'Pending' },
    'in-progress': { variant: 'default', label: 'In Progress' },
    'completed': { variant: 'outline', label: 'Completed' },
    'failed': { variant: 'destructive', label: 'Failed' },
    'superseded': { variant: 'secondary', label: 'Superseded' },
  }

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="font-headline text-lg">{task.goal}</CardTitle>
            <Badge variant={statusMap[task.status].variant}>
              {statusMap[task.status].label}
            </Badge>
          </div>
          <CardDescription>
            Task ID: {task.id}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {task.steps.map((step, index) => (
              <StepItem key={index} step={step} isCollapsed={isCollapsed && index > 0} />
            ))}
          </div>
          {task.status === 'in-progress' && <Progress value={progress} />}
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          {task.status === 'failed' && (
            <Button size="sm" variant="secondary" onClick={handleRetry} disabled={isRetrying}>
              <RefreshCcw className="mr-2" />
              {isRetrying ? 'Retrying...' : 'Retry with AI'}
            </Button>
          )}
          {(task.status === 'completed' || task.status === 'failed') && (
            <Button size="sm" onClick={handleGenerateReport} disabled={isGenerating}>
              <FileText className="mr-2" />
              {isGenerating ? 'Generating...' : 'Generate RCA Report'}
            </Button>
          )}
        </CardFooter>
      </Card>
      <Dialog open={isReportOpen} onOpenChange={setIsReportOpen}>
        <DialogContent className="sm:max-w-[70vw]">
          <DialogHeader>
            <DialogTitle>Root Cause Analysis Report</DialogTitle>
            <DialogDescription>Task: {task.goal}</DialogDescription>
          </DialogHeader>
          <div className="prose prose-sm dark:prose-invert max-h-[60vh] overflow-y-auto rounded-md border p-4">
            <pre className='font-sans whitespace-pre-wrap'>{reportContent}</pre>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function TaskList({ tasks }: { tasks: Task[] }) {
  if (!tasks.length) {
    return (
      <div className="text-center py-16 border-2 border-dashed rounded-lg">
        <Bot className="mx-auto size-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold font-headline">No Tasks Yet</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Create a new task to get started.
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
