import React from 'react';
import Movie from './Movie'; // Assuming Movie component is in a separate file

const MovieGallery: React.FC = () => {
  const movies = [
    {
      image: '/images/12.jpg',
      title: '12th fail',
      rating: 4.5,
      genre: 'Action',
      actors: ['Actor 1', 'Actor 2', 'Actor 3'],
      description: 'Description of Movie 1'
    },
    {
      image:  ' /images/rrr.jpg',
      title: 'RRR',
      rating: 4.2,
      genre: 'Comedy',
      actors: ['Actor 4', 'Actor 5', 'Actor 6'],
      description: 'Description of Movie 2'
    },
    {
      image:  ' /images/jackie.jpg',
      title: 'Battle Creek Brawl',
      rating: 4.2,
      genre: 'Comedy',
      actors: ['Actor 4', 'Actor 5', 'Actor 6'],
      description: 'Description of Movie 2'
    },
    {
      image:  ' /images/panda.jpg',
      title: 'Kunfu Panda',
      rating: 4.2,
      genre: 'Comedy Action',
      actors: ['Actor 4', 'Actor 5', 'Actor 6'],
      description: 'Description of Movie 2'
    }
    // Add more movie objects as needed
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  console.log('currentIndex',currentIndex)   
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 10000); 

    return () => clearInterval(intervalId); 
  }, [movies.length]); 
  const currentImage = movies[currentIndex];
  return (
    <div>
      {/* {movies.map((movie, index) => ( */}
        <Movie 
          key={currentIndex}
          image={currentImage.image}
          title={currentImage.title}
          rating={currentImage.rating}
          genre={currentImage.genre}
          actors={currentImage.actors}
          description={currentImage.description}
        />
      {/* ))} */}
    </div>
  )
};

export default MovieGallery;
