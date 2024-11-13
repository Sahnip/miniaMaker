import React from 'react';
import { Youtube } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Youtube className="w-8 h-8 text-red-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ThumbCraft AI
            </h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Tutoriel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Exemples
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}