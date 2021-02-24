import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const displayMovies = movies.map(movie => {
    return (
      <div key={movie.id}>
        <h3>Title: {movie.title}</h3>
        <h5>Running Time: {movie.time}</h5>
        Genres:
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
        <h1>Movies Page</h1>
        {displayMovies}
    </div>
  );
};

export default Movies;