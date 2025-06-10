import PhotoCard from './PhotoCard';

interface Photo {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aiHint?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="flex overflow-x-auto gap-5 py-5 px-2 w-full max-w-full scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-transparent">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} src={photo.src} alt={photo.alt} caption={photo.caption} aiHint={photo.aiHint} />
      ))}
    </div>
  );
}
