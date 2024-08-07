import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/MovieCard.css'

function MovieCard({ movie }) {
  
  const navigate= useNavigate();
  
const  handelClick=()=>{
      navigate(`/movie/${movie.id}`);
  }

  const { Title, Year, Poster, rating } = movie;

  return (
    <div className="movie-card" onClick={handelClick}>
      <img src={Poster} alt={Title} />
      <h2>{Title}</h2>
      <h3>{Year}</h3>
      <h4>Rating: {rating}</h4>
    </div>
  );
}

export default MovieCard;
