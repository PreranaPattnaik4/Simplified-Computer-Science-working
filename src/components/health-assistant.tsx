'use client';

import { useState, useTransition, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { askHealthAssistantAction, generateSpeechAction } from '@/lib/actions';
import type { ChatMessage } from '@/lib/types';
import { Bot, User, Volume2, Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export function HealthAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hello! I'm the Nexus AI Health Assistant. How can I help you check the system's status today?" }
  ]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const [isSpeaking, setIsSpeaking] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    startTransition(async () => {
      const result = await askHealthAssistantAction(newMessages);
      if (result.success) {
        setMessages(prev => [...prev, { role: 'model', content: result.response }]);
      } else {
        toast({
            variant: 'destructive',
            title: 'Assistant Error',
            description: result.error,
        });
        setMessages(prev => prev.slice(0, -1)); // remove user message on error
      }
    });
  };

  const handleSpeak = (text: string, index: number) => {
    if (audioRef.current && isSpeaking === index) {
      audioRef.current.pause();
      audioRef.current = null;
      setIsSpeaking(null);
      return;
    }

    setIsSpeaking(index);
    startTransition(async () => {
      const result = await generateSpeechAction(text);
      if (result.success) {
        audioRef.current = new Audio(result.audioUri);
        audioRef.current.play();
        audioRef.current.onended = () => {
            setIsSpeaking(null);
        }
      } else {
        toast({
            variant: 'destructive',
            title: 'Text-to-Speech Error',
            description: result.error,
        });
        setIsSpeaking(null);
      }
    });
  };

  return (
    <Card className="flex flex-col h-[70vh]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot /> Health Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={cn('flex items-start gap-3', msg.role === 'user' ? 'justify-end' : '')}>
                {msg.role === 'model' && <Bot className="text-primary flex-shrink-0" />}
                <div className={cn('p-3 rounded-lg max-w-sm', msg.role === 'model' ? 'bg-secondary' : 'bg-primary text-primary-foreground')}>
                  <p className="text-sm">{msg.content}</p>
                   {msg.role === 'model' && (
                     <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 mt-2"
                        onClick={() => handleSpeak(msg.content, index)}
                        disabled={isPending && isSpeaking === index}
                      >
                       {isSpeaking === index ? <Loader className="animate-spin" /> : <Volume2 className="size-4" />}
                      </Button>
                   )}
                </div>
                {msg.role === 'user' && <User className="text-accent-foreground flex-shrink-0" />}
              </div>
            ))}
            {isPending && messages[messages.length - 1].role === 'user' && (
              <div className="flex items-start gap-3">
                 <Bot className="text-primary" />
                 <div className="p-3 rounded-lg bg-secondary">
                    <Loader className="animate-spin text-primary" />
                 </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-4 border-t">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about system health..."
            disabled={isPending}
          />
          <Button type="submit" disabled={isPending}>
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
