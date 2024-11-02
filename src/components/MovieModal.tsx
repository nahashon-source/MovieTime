import React from 'react';
import { X, Star } from 'lucide-react';
import { Movie } from '../types';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export function MovieModal({ movie, onClose }: MovieModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="grid md:grid-cols-2">
          <div className="relative h-[400px]">
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className="absolute h-full w-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <h2 className="text-3xl font-bold">{movie.title}</h2>
            
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{movie.rating}</span>
              </div>
              <span className="text-gray-500">•</span>
              <span>{movie.year}</span>
            </div>
            
            <div className="mt-4 flex gap-2">
              {movie.genre.map((g) => (
                <span
                  key={g}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium"
                >
                  {g}
                </span>
              ))}
            </div>
            
            <p className="mt-6 text-gray-600 leading-relaxed">
              {movie.description}
            </p>
            
            <button className="mt-8 w-full rounded-lg bg-indigo-600 py-3 text-white font-medium hover:bg-indigo-700 transition-colors">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}