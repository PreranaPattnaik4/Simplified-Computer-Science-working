'use server';
/**
 * @fileOverview Generates a Root Cause Analysis (RCA) report for a completed or failed task.
 *
 * - generateRcaReport - A function that handles the RCA report generation process.
 * - GenerateRcaReportInput - The input type for the generateRcaReport function.
 * - GenerateRcaReportOutput - The return type for the generateRcaReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRcaReportInputSchema = z.object({
  goal: z.string().describe('The goal of the task.'),
  logs: z.array(z.string()).describe('An array of logs from the task execution.'),
});
export type GenerateRcaReportInput = z.infer<typeof GenerateRcaReportInputSchema>;

const GenerateRcaReportOutputSchema = z.string().describe('The full Markdown report.');
export type GenerateRcaReportOutput = z.infer<typeof GenerateRcaReportOutputSchema>;

export async function generateRcaReport(input: GenerateRcaReportInput): Promise<GenerateRcaReportOutput> {
  return generateRcaReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rcaReportPrompt',
  input: {schema: GenerateRcaReportInputSchema},
  output: {schema: GenerateRcaReportOutputSchema},
  prompt: `You are an expert IT analyst tasked with generating a Root Cause Analysis (RCA) report.

  Given the following task goal and execution logs, create a detailed RCA report in Markdown format.
  The report should include the following sections:
  - Summary: A brief summary of the task and its outcome.
  - Root Cause: A detailed explanation of the root cause of any failures or issues.
  - Resolution/Outcome: A description of how the issue was resolved, or the final outcome of the task.

  Task Goal: {{{goal}}}

  Execution Logs:
  {{#each logs}}
  {{this}}
  {{/each}}
  `,
});

const generateRcaReportFlow = ai.defineFlow(
  {
    name: 'generateRcaReportFlow',
    inputSchema: GenerateRcaReportInputSchema,
    outputSchema: GenerateRcaReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
