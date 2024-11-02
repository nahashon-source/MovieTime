import React from 'react';
import { Star } from 'lucide-react';
import { MovieCardProps } from '../types';

export function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div 
      onClick={() => onClick(movie)}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:scale-105 cursor-pointer"
    >
      <div className="aspect-[2/3] w-full overflow-hidden">
        <img 
          src={movie.imageUrl} 
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 p-4 text-white">
          <h3 className="text-xl font-bold">{movie.title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{movie.rating}</span>
            <span className="mx-2">•</span>
            <span>{movie.year}</span>
          </div>
          <div className="flex gap-2 mt-2">
            {movie.genre.map((g) => (
              <span key={g} className="rounded-full bg-white/20 px-2 py-1 text-xs">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}