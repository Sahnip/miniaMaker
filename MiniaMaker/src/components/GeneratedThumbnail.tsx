import React from 'react';

interface GeneratedThumbnailProps {
  imageUrl: string;
}

export default function GeneratedThumbnail({ imageUrl }: GeneratedThumbnailProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-video rounded-lg overflow-hidden">
        <img 
          src={imageUrl} 
          alt="Generated thumbnail" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-2">
        <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Télécharger
        </button>
        <button className="flex-1 border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
          Régénérer
        </button>
      </div>
    </div>
  );
}