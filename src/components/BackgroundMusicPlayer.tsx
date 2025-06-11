"use client";

import { useEffect, useRef } from 'react';

interface BackgroundMusicPlayerProps {
  src: string;
}

export default function BackgroundMusicPlayer({ src }: BackgroundMusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Adiciona um pequeno delay para tentar garantir que o navegador esteja pronto
      const playTimeout = setTimeout(() => {
        audio.play().catch(error => {
          console.warn("Música de fundo: Autoplay foi impedido pelo navegador. Pode ser necessário interagir com a página primeiro.", error);
        });
      }, 100); // Atraso de 100ms

      // Limpa o timeout se o componente for desmontado antes do play
      return () => clearTimeout(playTimeout);
    }
  }, []); // Array de dependência vazio para rodar apenas uma vez no mount

  return (
    <audio ref={audioRef} loop controls={false} style={{ display: 'none' }}>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
