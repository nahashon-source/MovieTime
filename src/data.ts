import { Movie } from './types';

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    rating: 4.8,
    year: 2010,
    genre: ["Sci-Fi", "Action"],
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    rating: 4.9,
    year: 1994,
    genre: ["Drama"],
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Interstellar",
    rating: 4.7,
    year: 2014,
    genre: ["Sci-Fi", "Adventure"],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "The Dark Knight",
    rating: 4.9,
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800"
  },
];