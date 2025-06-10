'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { handleGenerateLoveNoteAction, type LoveNoteGeneratorState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Wand2 } from 'lucide-react';

const initialState: LoveNoteGeneratorState = {
  message: null,
  loveNote: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending} disabled={pending} className="bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? 'Gerando...' : <>Gerar Bilhete <Wand2 className="ml-2 h-4 w-4" /></>}
    </Button>
  );
}

export default function LoveNoteGenerator() {
  const [state, formAction] = useActionState(handleGenerateLoveNoteAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message) {
      if (state.loveNote && !state.errors) {
        toast({
          title: "Sucesso!",
          description: state.message,
        });
      } else if (state.errors) {
         toast({
          title: "Erro de Validação",
          description: state.message || "Por favor, verifique os campos.",
          variant: "destructive",
        });
      } else if (!state.loveNote && state.message && !state.errors) {
         toast({
          title: "Aviso",
          description: state.message,
          variant: "default",
        });
      }
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Gerador de Bilhete de Amor IA</CardTitle>
        <CardDescription className="font-body text-foreground/80">
          Escreva algumas palavras-chave (ex: "primeiro encontro", "memória favorita", "piada interna") e deixe a IA criar um bilhete de amor para você!
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keywords" className="font-body text-primary">Palavras-chave:</Label>
            <Textarea
              id="keywords"
              name="keywords"
              placeholder="Ex: café da manhã na cama, seu sorriso, nosso cachorro..."
              rows={3}
              className="font-body bg-white"
              aria-describedby="keywords-error"
            />
            {state?.errors?.keywords && (
              <p id="keywords-error" className="text-sm text-destructive font-body">
                {state.errors.keywords.join(', ')}
              </p>
            )}
          </div>
          {state?.errors?._form && (
             <p className="text-sm text-destructive font-body">
                {state.errors._form.join(', ')}
              </p>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <SubmitButton />
          {state?.loveNote && (
            <Card className="mt-4 w-full bg-accent/30">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">Seu Bilhete de Amor:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-foreground whitespace-pre-wrap">{state.loveNote}</p>
              </CardContent>
            </Card>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
