  
import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const displayDirectors = directors.map(director => {
    return (
      <div key={director.name}>
        <h3>Name: {director.name}</h3>
        Movies:
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors}
    </div>
  );
}

export default Directors