// src/pages/MovieDetail.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../Style/MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useSelector(state => 
    state.movies.movies.find(m => m.id === id)
  );

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-detail">
      <h3 className="movie-id">Movie ID: {movie.id}</h3>
      <img src={movie.Poster} alt={movie.Title} className="movie-image" />
      <h2 className="movie-name">{movie.Title}</h2>
      <p className="movie-year">{movie.Year}</p>
      <p className="movie-type">{movie.Type}</p>
      <p className="movie-rating">{movie.rating}</p>
    </div>
  );
};

export default MovieDetail;