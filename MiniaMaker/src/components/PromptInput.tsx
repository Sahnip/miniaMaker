import React from 'react';
import { Send } from 'lucide-react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export default function PromptInput({ value, onChange, onGenerate, isGenerating }: PromptInputProps) {
  return (
    <div className="space-y-4">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Décrivez le style de miniature que vous souhaitez générer..."
        className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
      />
      <button
        onClick={onGenerate}
        disabled={!value.trim() || isGenerating}
        className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5" />
        {isGenerating ? 'Génération en cours...' : 'Générer la miniature'}
      </button>
    </div>
  );
}