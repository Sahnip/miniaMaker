import React, { useCallback } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  onUpload: (file: File) => void;
  currentImage: string | null;
}

export default function ImageUploader({ onUpload, currentImage }: ImageUploaderProps) {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onUpload(file);
    }
  }, [onUpload]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div 
      className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-purple-500 transition-colors"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {currentImage ? (
        <div className="relative aspect-video">
          <img 
            src={currentImage} 
            alt="Uploaded preview" 
            className="w-full h-full object-cover rounded-lg"
          />
          <label className="absolute bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-700 transition-colors">
            Changer l'image
            <input type="file" className="hidden" onChange={handleChange} accept="image/*" />
          </label>
        </div>
      ) : (
        <label className="flex flex-col items-center cursor-pointer">
          <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
          <span className="text-gray-600">Glissez une image ou cliquez pour sélectionner</span>
          <input type="file" className="hidden" onChange={handleChange} accept="image/*" />
        </label>
      )}
    </div>
  );
}