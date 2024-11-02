export interface Movie {
  id: number;
  title: string;
  rating: number;
  year: number;
  genre: string[];
  description: string;
  imageUrl: string;
}

export interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}