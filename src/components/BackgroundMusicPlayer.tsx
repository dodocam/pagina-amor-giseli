
"use client";

import { useRef, useEffect, forwardRef } from 'react';

interface BackgroundMusicPlayerProps {
  src: string;
}

export interface BackgroundMusicPlayerHandle {
  playAudio: () => void;
  pauseAudio: () => void;
}

const BackgroundMusicPlayer = forwardRef<BackgroundMusicPlayerHandle, BackgroundMusicPlayerProps>(({ src }, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.warn("Música de fundo: Play foi impedido. Verifique as permissões do navegador ou interações do usuário.", error);
      });
    }
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <audio ref={audioRef} loop controls={false} style={{ display: 'none' }}>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
});

BackgroundMusicPlayer.displayName = 'BackgroundMusicPlayer';

export default BackgroundMusicPlayer;
