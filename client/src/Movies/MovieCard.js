import React from 'react';
import { Link, NavLink } from "react-router-dom";
const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  console.log("eafafea", props)
  return(
    <NavLink to ={`/movies/${props.movie.id}`}>
   
  
    <div className="movie-card">
    <h2>{title}</h2>
    <div className="movie-director">
      Director: <em>{director}</em>
    </div>
    <div className="movie-metascore">
      Metascore: <strong>{metascore}</strong>
    </div>
    <h3>Actors</h3>

    {stars && stars.map(star => (
      <div key={star} className="movie-star">
        {star}
      </div>
    ))}
  </div>
  </NavLink>
  );
};

export default MovieCard;
