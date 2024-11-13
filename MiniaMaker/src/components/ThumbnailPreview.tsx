import React from 'react';

interface ThumbnailPreviewProps {
  uploadedImage: string | null;
}

export default function ThumbnailPreview({ uploadedImage }: ThumbnailPreviewProps) {
  return (
    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
      {uploadedImage ? (
        <img 
          src={uploadedImage} 
          alt="Preview" 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Aperçu de votre miniature
        </div>
      )}
    </div>
  );
}