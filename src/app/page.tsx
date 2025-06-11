
"use client";

import { useState, useRef } from 'react';
import type { LegacyRef } from 'react';
import { Heart, Clock, Camera, Moon, MessageSquareText } from 'lucide-react';
import StorySlide from '@/components/StorySlide';
import type { BackgroundMusicPlayerHandle } from '@/components/BackgroundMusicPlayer';
import HeartAnimation from '@/components/HeartAnimation';
const photos = [
  { id: '1', src: '/imagem1.jpg', alt: 'Casal sorrindo em parque dia ensolarado', caption: 'Passeio no parque, esse foi o 1 de muitos! ​🌳🥰​​', aiHint: 'couple park' },
  { id: '2', src: '/imagem2.jpg', alt: 'Casal sorrindo após almoço no Cocobambu', caption: 'Almoço delicioso junto do meu amor!​😋​❤️​', aiHint: 'couple restaurant' },
  { id: '3', src: '/imagem3.jpg', alt: 'Casal tirando selfie saida do Cocobambu', caption: 'Passeio no shopping, olhares e sorrisos 🤣​😁​🤩​', aiHint: 'couple selfie' },
  { id: '4', src: '/imagem4.jpg', alt: 'Casal abraçado sorrindo', caption: 'Cinema Vip, até dormimos 🥱​😫​', aiHint: 'couple cinema' },
  { id: '5', src: '/imagem5.jpg', alt: 'Casal abraçado sorrindo', caption: 'Nosso passeio preferido ​😍​🥰​❤️​', aiHint: 'couple nature' },
  { id: '6', src: '/imagem6.jpg', alt: 'Nova imagem adicionada ao carrossel', caption: 'Mais um momento inesquecível! 📸💖', aiHint: 'celebration event' },
];

import PhotoGallery from '@/components/PhotoGallery';
import BackgroundMusicPlayer from '@/components/BackgroundMusicPlayer';

export default function Home() {
  const [showLoveText, setShowLoveText] = useState(false);
  const commonTextStyle = "font-body text-lg md:text-xl text-foreground/90 mb-5 max-w-prose leading-relaxed";
  const headingStyle = "font-headline text-3xl md:text-4xl text-primary mb-6";
  const musicPlayerRef = useRef<BackgroundMusicPlayerHandle>(null);

  const handleShowLove = () => {
    setShowLoveText(true);
    if (musicPlayerRef.current) {
      musicPlayerRef.current.playAudio();
    }
  };

  return (
    <>
      <BackgroundMusicPlayer ref={musicPlayerRef} src="/copia-proibida-leo-foguete.mp3" />
      <main className="snap-container">
        <StorySlide style={{ animationDelay: '0.2s' }}>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-slate-500 mb-6">Você é o melhor capítulo da minha vida</h1>
          <Heart className="w-12 h-12 md:w-16 md:h-16 text-primary fill-primary my-4 mx-auto" />
          <p className={commonTextStyle}>Obrigado por ser meu lar, meu sorriso mais sincero e o amor que eu sempre sonhei. Te amo, minha maravilhosa.</p>
        </StorySlide>

        <StorySlide style={{ animationDelay: '0.4s' }}>
          <h2 style={{ fontFamily: 'Parisienne, cursive' }} className={headingStyle}><Clock className="inline-block w-8 h-8 mr-2 align-middle" />Como Tudo Começou</h2>
          <p className={commonTextStyle}>No começo, era pra ser só um rolê com a Josi… mas o destino resolveu dar um empurrãozinho.</p>
        </StorySlide>

        <StorySlide style={{ animationDelay: '0.6s' }}>
          <p className={commonTextStyle}>A Josi não foi, e acabou ficando só entre eu e a Gi. Passei pra buscá-la com meu carro (ainda sem insulfilm, rs) e nosso \"encontro secreto\" começou ali.</p>
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
          <h2 style={{ fontFamily: 'Parisienne, cursive' }} className={headingStyle}><Camera className="inline-block w-8 h-8 mr-2 align-middle" />Momentos Nossos</h2>
          <PhotoGallery photos={photos} />
        </StorySlide>

        <section className="section message mx-auto mt-16 px-4 py-8 text-center">
          <h2 className="text-3xl font-headline text-primary mb-6">
            💌 Pra você, minha deliciosa
          </h2>
          <p className={`${commonTextStyle} text-center`}>
            Desde o primeiro olhar, eu soube que você era diferente.<br />
            Você é linda, meiga, bravinha do jeito mais encantador do mundo.<br />
            Gosta de pagode, Shopee, Mentos... e de mim também, né?<br />
            Sou grato por cada momento com você.<br />
            Te amo com tudo que sou.
          </p>
        </section>

        <div className="w-full text-center my-8 px-4">
          <button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 text-xl inline-block"
            onClick={handleShowLove}
          >
            Te amo, minha maravilhosa 💖
          </button>
        </div>

        {showLoveText && (
          <div className="flex justify-center mb-12">
            <HeartAnimation />
          </div>
        )}

        <footer className="text-center text-foreground/70 py-10">
          Feito com carinho por alguém que não consegue parar de sorrir desde 05/04/2025 🫶
        </footer>
      </main>
    </>
  );
}
