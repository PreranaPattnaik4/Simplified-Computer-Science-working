'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Terminal } from 'lucide-react';
import { simulateCommandAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from './ui/scroll-area';

export function CommandSimulator() {
  const [command, setCommand] = useState('ls -la /var/log');
  const [output, setOutput] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSimulate = () => {
    if (!command) return;
    setOutput('');
    startTransition(async () => {
      const result = await simulateCommandAction(command);
      if (result.success) {
        setOutput(result.output);
      } else {
        toast({
          variant: 'destructive',
          title: 'Simulation Failed',
          description: result.error,
        });
      }
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Terminal className="mr-2" />
          Command Simulator
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Command Simulator</DialogTitle>
          <DialogDescription>
            Test shell commands using the Console Agent to see simulated output.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Input
              id="command"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="e.g., systemctl status nginx"
              className="font-code"
            />
            <Button onClick={handleSimulate} disabled={isPending}>
              {isPending ? 'Simulating...' : 'Run'}
            </Button>
          </div>
          {output && (
             <ScrollArea className="h-[300px] w-full">
              <pre className="mt-2 w-full rounded-md bg-secondary p-4 font-code text-sm text-foreground whitespace-pre-wrap break-all">
                <code>{output}</code>
              </pre>
            </ScrollArea>
          )}
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => {
            navigator.clipboard.writeText(output);
            toast({title: "Copied to clipboard!"})
          }} disabled={!output}>
            Copy Output
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
