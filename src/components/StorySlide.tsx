import type React from 'react';
import { cn } from '@/lib/utils';

interface StorySlideProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function StorySlide({ children, className, style }: StorySlideProps) {
  return (
    <section
      className={cn(
        "snap-slide animate-fade-in-slide-up",
        className
      )}
      style={style}
    >
      <div className="max-w-3xl w-full">
        {children}
      </div>
    </section>
  );
}
