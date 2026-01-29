'use server';
/**
 * @fileOverview Generates professional AI search results.
 *
 * This file defines a Genkit flow that takes a user's search query,
 * selected topics, content types, and other optional controls, and
 * returns a structured list of professional search result cards.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Schema for a single search result card
const SearchResultCardSchema = z.object({
  title: z.string().describe('Executive-level, clear, and domain-specific title for the search result card.'),
  tags: z.array(z.string()).describe('An array of tags including topics and content types relevant to the result.'),
  executiveSummary: z.string().describe('A 4-6 line summary explaining the relevance and scope of the content.'),
  problemContext: z.string().describe('Business, user, and system-level context framing the problem.'),
  coreConcepts: z.string().describe('Structured explanation of core concepts, models, or frameworks. Use markdown for lists and formatting.'),
  practicalApplication: z.string().describe('How this concept is applied in real AI products, including key decision points. Use markdown.'),
  realWorldExample: z.string().describe('A grounded, realistic product scenario or case reference.'),
  risksAndTradeoffs: z.string().describe('Analysis of technical, UX, product, and ethical risks, constraints, and trade-offs. Use markdown.'),
  keyTakeaways: z.string().describe('Strategic, decision-oriented insights for AI product leaders. Use markdown for a bulleted list.'),
  explorationPaths: z.array(z.string()).describe('A list of related topics, frameworks, or metrics to explore next.'),
});

// Schema for the input to the AI search flow
export const AiSearchInputSchema = z.object({
  query: z.string().describe('The user\'s primary search query.'),
  topics: z.array(z.string()).describe('Selected topic areas to filter or focus the search.'),
  contentTypes: z.array(z.string()).describe('Selected content types to shape the results.'),
  depth: z.enum(['Beginner', 'Intermediate', 'Expert']).default('Intermediate').describe('The desired depth of analysis.'),
  role: z.enum(['Product Manager', 'Designer', 'Engineer', 'Founder']).default('Product Manager').describe('The professional perspective to adopt.'),
});
export type AiSearchInput = z.infer<typeof AiSearchInputSchema>;

// Schema for the output of the AI search flow
const AiSearchOutputSchema = z.array(SearchResultCardSchema);
export type AiSearchOutput = z.infer<typeof AiSearchOutputSchema>;


// The exported wrapper function that the UI will call
export async function generateSearchResults(input: AiSearchInput): Promise<AiSearchOutput> {
  return aiSearchFlow(input);
}


// The main Genkit flow
const aiSearchFlow = ai.defineFlow(
  {
    name: 'aiSearchFlow',
    inputSchema: AiSearchInputSchema,
    outputSchema: AiSearchOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
      model: 'gemini-1.5-flash-latest',
      system: `You are an AI Search Results Generator for a professional AI Product platform.
This system is NOT a chatbot. Do NOT behave conversationally.

Your task is to generate 3-5 highly professional, detailed, structured search result cards based on the user input.

OUTPUT RULES:
- Output must be formal, structured, and professional.
- No conversational tone.
- No Q&A format.
- No chat-style language.

Each search result card MUST include the following fields, populated with expert-level analysis. Use Markdown for formatting within string fields where appropriate (e.g., for lists).

1.  **title**: Executive-level, clear, and domain-specific.
2.  **tags**: Topics + content types.
3.  **executiveSummary**: 4-6 lines explaining relevance and scope.
4.  **problemContext**: Business, user, and system-level framing.
5.  **coreConcepts**: Structured explanation of models or approaches.
6.  **practicalApplication**: How this is applied in real AI products, including decision points.
7.  **realWorldExample**: A grounded, realistic product scenario.
8.  **risksAndTradeoffs**: Analysis of technical, UX, product, and ethical risks.
9.  **keyTakeaways**: Strategic, decision-oriented insights for AI product leaders (as a bulleted list).
10. **explorationPaths**: Related topics or frameworks to explore next.

Treat AI as a product capability, not just a model. Avoid generic explanations. Assume the reader is an experienced professional. Prioritize clarity, rigor, and depth.`,
      prompt: `
        Generate search results for the following user input:

        - Search Query: "${input.query}"
        - Selected Topics: ${input.topics.join(', ') || 'None'}
        - Selected Content Types: ${input.contentTypes.join(', ') || 'None'}
        - Depth Level: ${input.depth}
        - Role Perspective: ${input.role}
      `,
      output: {
        schema: AiSearchOutputSchema,
      },
      config: {
        temperature: 0.5,
      }
    });

    return output || [];
  }
);
