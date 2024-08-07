import React,{useEffect} from 'react'
import  {useDispatch,useSelector} from 'react-redux';
import { fetchMovies } from '../Redux/movieSlice';
import '../Style/MovieList.css';

import MovieCard from '../Components/MovieCard';
function MovieList() {
    const dispatch =useDispatch();
    const {isLoading,isError,movies}= useSelector(state=> state.movies);

useEffect(()=>{
  dispatch(fetchMovies());   
},[dispatch]);

    return (
    <div className="movie-container">
          {movies.map(movie=>(
             <MovieCard key={movie.id} movie ={movie}/> 
          ))}
    </div>
  )
}

export default MovieList
