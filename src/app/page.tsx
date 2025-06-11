
import StorySlide from '@/components/StorySlide';
import PhotoGallery from '@/components/PhotoGallery';
import BackgroundMusicPlayer from '@/components/BackgroundMusicPlayer';
import LoveNoteGenerator from '@/components/LoveNoteGenerator';
import { Heart, Clock, Camera, Moon, MessageSquareText } from 'lucide-react';

const photos = [
  { id: '1', src: '/imagem1.jpg', alt: 'Casal sorrindo em parque dia ensolarado', caption: 'Passeio no parque, esse foi o 1 de muitos! ​🌳🥰​​', aiHint: 'couple park' },
  { id: '2', src: '/imagem2.jpg', alt: 'Casal sorrindo após almoço no Cocobambu', caption: 'Almoço delicioso junto do meu amor!​😋​❤️​', aiHint: 'couple restaurant' },
  { id: '3', src: '/imagem3.jpg', alt: 'Casal tirando selfie saida do Cocobambu', caption: 'Passeio no shopping, olhares e sorrisos 🤣​😁​🤩​', aiHint: 'couple selfie' },
  { id: '4', src: '/imagem4.jpg', alt: 'Casal abraçado sorrindo', caption: 'Cinema Vip, até dormimos 🥱​😫​', aiHint: 'couple cinema' },
  { id: '5', src: '/imagem5.jpg', alt: 'Casal abraçado sorrindo', caption: 'Nosso passeio preferido ​😍​🥰​❤️​', aiHint: 'couple nature' },
  { id: '6', src: '/imagem6.jpg', alt: 'Nova imagem adicionada ao carrossel', caption: 'Mais um momento inesquecível! 📸💖', aiHint: 'celebration event' },
];

export default function Home() {
  const commonTextStyle = "font-body text-lg md:text-xl text-foreground/90 mb-5 max-w-prose leading-relaxed";
  const headingStyle = "font-headline text-3xl md:text-4xl text-primary mb-6";

  return (
    <>
      <BackgroundMusicPlayer src="/copia-proibida-leo-foguete.mp3" />
      <main className="snap-container">
        <StorySlide style={{ animationDelay: '0.2s' }}>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-slate-500 mb-6">Você é o melhor capítulo da minha vida</h1>
          <Heart className="w-12 h-12 md:w-16 md:h-16 text-primary fill-primary my-4" />
          <p className={commonTextStyle}>Obrigado por ser meu lar, meu sorriso mais sincero e o amor que eu sempre sonhei. Te amo, minha maravilhosa.</p>
        </StorySlide>

        <StorySlide style={{ animationDelay: '0.4s' }}>
          <h2 className={headingStyle}><Clock className="inline-block w-8 h-8 mr-2 align-middle" />Como Tudo Começou</h2>
          <p className={commonTextStyle}>No começo, era pra ser só um rolê com a Jose… mas o destino resolveu dar um empurrãozinho.</p>
        </StorySlide>

        <StorySlide style={{ animationDelay: '0.6s' }}>
          <p className={commonTextStyle}>A Jose não foi, e acabou ficando só entre eu e a Gi. Passei pra buscá-la com meu carro (ainda sem insulfilm, rs) e nosso "encontro secreto" começou ali.</p>
        </StorySlide>

        <StorySlide style={{ animationDelay: '0.8s' }}>
          <p className={commonTextStyle}>Fomos ao Shopping Iguatemi Alphaville. No Coco Bambu, brindamos com um chopp gelado, rindo como se o mundo lá fora nem existisse.</p>
        </StorySlide>

        <StorySlide style={{ animationDelay: '1s' }}>
          <p className={commonTextStyle}>Depois, curtimos o show do Péricles — nos abraçamos, sorrimos e deixamos o pagode embalar algo que já estava nascendo entre nós.</p>
        </StorySlide>

        <StorySlide style={{ animationDelay: '1.2s' }}>
          <p className={commonTextStyle}>De lá, seguimos pro boliche Phoenix, em Jundiaí. Entre uma jogada e outra, os olhares já diziam mais do que qualquer palavra. 🎳</p>
        </StorySlide>

        <StorySlide style={{ animationDelay: '1.4s' }}>
          <p className={commonTextStyle}>A noite terminou no estacionamento do mercado Dom Olívio. Sentados no carro, dividimos chocolate e algumas verdades tímidas.</p>
        </StorySlide>

        <StorySlide style={{ animationDelay: '1.6s' }}>
          <p className={commonTextStyle}>Eu olhei pra ela e disse: <strong className="text-primary">“Seu beijo deve ser muito bom.”</strong></p>
          <p className={commonTextStyle}>Ela sorriu e perguntou: <strong className="text-primary">“Por quê?”</strong></p>
          <p className={commonTextStyle}>Eu, meio tímido, respondi: <strong className="text-primary">“Porque ele é difícil.”</strong></p>
        </StorySlide>

        <StorySlide style={{ animationDelay: '1.8s' }}>
          <p className={commonTextStyle}>E foi ali, entre sorrisos e olhares cúmplices, que nos beijamos pela primeira vez. Nosso começo foi tímido, doce… e inesquecível.</p>
          <p className={`${commonTextStyle} italic`}>E quem sabe, talvez a noite nem tenha terminado ali. <Moon className="inline-block w-5 h-5 align-middle" /> <MessageSquareText className="inline-block w-5 h-5 align-middle" /></p>
        </StorySlide>

        <StorySlide style={{ animationDelay: '2s' }}>
          <h2 className={headingStyle}><Camera className="inline-block w-8 h-8 mr-2 align-middle" />Momentos Nossos</h2>
          <PhotoGallery photos={photos} />
        </StorySlide>

        <StorySlide style={{ animationDelay: '2.2s' }}>
          <LoveNoteGenerator />
        </StorySlide>
      </main>
    </>
  );
}
