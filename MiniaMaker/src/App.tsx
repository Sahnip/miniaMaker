import React, { useState } from 'react';
import { Upload, Wand2, Youtube, Image as ImageIcon, Send } from 'lucide-react';
import Header from './components/Header';
import ThumbnailPreview from './components/ThumbnailPreview';
import ImageUploader from './components/ImageUploader';
import PromptInput from './components/PromptInput';
import GeneratedThumbnail from './components/GeneratedThumbnail';

function App() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [generatedThumbnail, setGeneratedThumbnail] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulation d'appel API
    setTimeout(() => {
      setGeneratedThumbnail('https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Upload className="w-6 h-6 text-purple-600" />
                Image Source
              </h2>
              <ImageUploader onUpload={handleImageUpload} currentImage={uploadedImage} />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Wand2 className="w-6 h-6 text-purple-600" />
                Description IA
              </h2>
              <PromptInput 
                value={prompt}
                onChange={setPrompt}
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Youtube className="w-6 h-6 text-red-600" />
              Aperçu
            </h2>
            {generatedThumbnail ? (
              <GeneratedThumbnail imageUrl={generatedThumbnail} />
            ) : (
              <ThumbnailPreview uploadedImage={uploadedImage} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;