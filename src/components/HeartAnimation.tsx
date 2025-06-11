
"use client";

import { Heart } from 'lucide-react';

export default function HeartAnimation() {
  return (
    <div className="flex items-center justify-center p-4">
      <Heart className="w-24 h-24 text-primary fill-primary animate-pulse-grow" />
    </div>
  );
}
