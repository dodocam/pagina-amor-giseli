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
      // Autoplay can be tricky due to browser policies.
      // This attempts to play, but user interaction might be required first.
      audio.play().catch(error => console.warn("Audio autoplay was prevented:", error));
    }
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay style={{ display: 'none' }}>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
