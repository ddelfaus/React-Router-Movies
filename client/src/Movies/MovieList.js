import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";
import MovieCard from './MovieCard';
const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log("hello ",response)
          setMovies(response.data);
          
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
  
          
        <MovieDetails key={movie.id} movie={movie} />
       
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
 
  return <MovieCard key={movie.id} movie={movie} />
 

}

export default MovieList;
