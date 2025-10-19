'use server';
/**
 * @fileOverview Automatically formulates a goal to resolve a system alert.
 *
 * - proactiveIssueResolution - A function that generates a resolution goal for a system alert.
 * - ProactiveIssueResolutionInput - The input type for the proactiveIssueResolution function.
 * - ProactiveIssueResolutionOutput - The return type for the proactiveIssueResolution function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const ProactiveIssueResolutionInputSchema = z.object({
  title: z.string().describe('The title of the alert.'),
  description: z.string().describe('The description of the alert.'),
});
export type ProactiveIssueResolutionInput = z.infer<typeof ProactiveIssueResolutionInputSchema>;

const ProactiveIssueResolutionOutputSchema = z.object({
  goal: z.string().describe('The generated goal to resolve the alert.'),
});
export type ProactiveIssueResolutionOutput = z.infer<typeof ProactiveIssueResolutionOutputSchema>;

export async function proactiveIssueResolution(input: ProactiveIssueResolutionInput): Promise<ProactiveIssueResolutionOutput> {
  return proactiveIssueResolutionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'proactiveIssueResolutionPrompt',
  input: {schema: ProactiveIssueResolutionInputSchema},
  output: {schema: ProactiveIssueResolutionOutputSchema},
  prompt: `You are an AI system administrator.  Your job is to take alerts and formulate high-level goals to resolve them.

Alert Title: {{{title}}}
Alert Description: {{{description}}}

Based on the above, generate a goal that can resolve this alert.  The goal should be concise and actionable.`,
});

const proactiveIssueResolutionFlow = ai.defineFlow(
  {
    name: 'proactiveIssueResolutionFlow',
    inputSchema: ProactiveIssueResolutionInputSchema,
    outputSchema: ProactiveIssueResolutionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
