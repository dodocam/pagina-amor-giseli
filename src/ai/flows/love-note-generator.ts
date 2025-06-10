// src/ai/flows/love-note-generator.ts
'use server';

/**
 * @fileOverview Generates a personalized love note based on user-provided keywords.
 *
 * - generateLoveNote - A function that generates the love note.
 * - GenerateLoveNoteInput - The input type for the generateLoveNote function.
 * - GenerateLoveNoteOutput - The return type for the generateLoveNote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLoveNoteInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'Keywords related to the relationship, separated by commas (e.g., first date, favorite memory, inside joke).'
    ),
});
export type GenerateLoveNoteInput = z.infer<typeof GenerateLoveNoteInputSchema>;

const GenerateLoveNoteOutputSchema = z.object({
  loveNote: z.string().describe('The generated love note.'),
});
export type GenerateLoveNoteOutput = z.infer<typeof GenerateLoveNoteOutputSchema>;

export async function generateLoveNote(input: GenerateLoveNoteInput): Promise<GenerateLoveNoteOutput> {
  return generateLoveNoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLoveNotePrompt',
  input: {schema: GenerateLoveNoteInputSchema},
  output: {schema: GenerateLoveNoteOutputSchema},
  prompt: `You are a professional love letter writer. Please generate a short, heartfelt love note based on the following keywords related to the relationship.  Make sure the note is no more than 4 sentences long.\n\nKeywords: {{{keywords}}}`,
});

const generateLoveNoteFlow = ai.defineFlow(
  {
    name: 'generateLoveNoteFlow',
    inputSchema: GenerateLoveNoteInputSchema,
    outputSchema: GenerateLoveNoteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
