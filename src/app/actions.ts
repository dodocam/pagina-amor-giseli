'use server';
import { generateLoveNote as generateLoveNoteFlow } from '@/ai/flows/love-note-generator';
import { z } from 'zod';

const GenerateLoveNoteInputSchemaServer = z.object({
  keywords: z.string().min(3, { message: "Por favor, insira algumas palavras-chave (mínimo 3 caracteres)." }),
});

export interface LoveNoteGeneratorState {
  message?: string | null;
  loveNote?: string | null;
  errors?: {
    keywords?: string[] | undefined;
    _form?: string[] | undefined;
  } | null;
}

export async function handleGenerateLoveNoteAction(
  prevState: LoveNoteGeneratorState | undefined,
  formData: FormData
): Promise<LoveNoteGeneratorState> {
  const validatedFields = GenerateLoveNoteInputSchemaServer.safeParse({
    keywords: formData.get('keywords'),
  });

  if (!validatedFields.success) {
    return {
      message: "Entrada inválida.",
      errors: validatedFields.error.flatten().fieldErrors,
      loveNote: null,
    };
  }

  try {
    const result = await generateLoveNoteFlow({ keywords: validatedFields.data.keywords });
    if (result.loveNote) {
      return { message: "Bilhete gerado com sucesso!", loveNote: result.loveNote, errors: null };
    } else {
      return { message: "Não foi possível gerar o bilhete. Tente palavras-chave diferentes.", loveNote: null, errors: {_form: ["A IA não conseguiu gerar uma nota com essas palavras."]} };
    }
  } catch (error) {
    console.error("AI Love Note Generation Error:", error);
    return { message: "Falha ao gerar o bilhete de amor. Tente novamente.", loveNote: null, errors: {_form: ["Ocorreu um erro no servidor."]} };
  }
}
