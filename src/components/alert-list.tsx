'use client';

import type { Alert } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { resolveAlertAction } from '@/lib/actions';
import { AlertTriangle, Bot } from 'lucide-react';
import { useTransition } from 'react';
import { useToast } from '@/hooks/use-toast';

function AlertCard({ alert }: { alert: Alert }) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleResolve = () => {
    startTransition(async () => {
      const result = await resolveAlertAction(alert);
      if (result.success) {
        toast({
          title: 'Alert Resolution Started',
          description: `New task created: "${result.goal}"`,
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error,
        });
      }
    });
  };

  return (
    <div className="bg-card/50 p-4 rounded-lg flex items-start gap-4">
      <div className="text-destructive pt-1">
        <AlertTriangle className="size-5" />
      </div>
      <div className="flex-1">
        <p className="font-semibold">{alert.title}</p>
        <p className="text-sm text-muted-foreground">{alert.description}</p>
      </div>
      {alert.status === 'new' && (
        <Button size="sm" onClick={handleResolve} disabled={isPending}>
          <Bot className="mr-2" />
          {isPending ? 'Resolving...' : 'Resolve'}
        </Button>
      )}
    </div>
  );
}


export function AlertList({ alerts }: { alerts: Alert[] }) {
  if (!alerts.length) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </CardContent>
    </Card>
  );
}
