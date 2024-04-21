import React from 'react';

interface MovieProps {
  image: string;
  title: string;
  rating: number;
  genre: string;
  actors: string[];
  description: string;
}

const Movie: React.FC<MovieProps> = ({ image, title, rating, genre, actors, description }) => {
 

  return (
    <div className="relative overflow-hidden h-screen ">
      <img src={image} alt={title}  className="absolute inset-0 object-fill h-full w-full z-0  "/>
      <div className="absolute ">
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
        <p>Genre: {genre}</p>
        <p>Actors: {actors.join(', ')}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default Movie;
