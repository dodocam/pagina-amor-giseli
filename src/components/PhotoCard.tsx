import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface PhotoCardProps {
  src: string;
  alt: string;
  caption: string;
  aiHint?: string;
}

export default function PhotoCard({ src, alt, caption, aiHint }: PhotoCardProps) {
  return (
    <Card className="min-w-[200px] sm:min-w-[250px] md:min-w-[300px] flex-none shadow-xl bg-white/80 backdrop-blur-sm">
      <CardContent className="p-3">
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          className="rounded-md object-cover aspect-square"
          data-ai-hint={aiHint}
        />
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <p className="text-sm font-body text-primary text-center w-full">{caption}</p>
      </CardFooter>
    </Card>
  );
}
