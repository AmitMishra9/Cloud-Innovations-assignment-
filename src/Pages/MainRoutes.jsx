import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from "./Homepage";
import Login from './Login';
import MovieDetail from './MovieDetail';

const PrivteRoute= ({children})=>{
      const isAuth=useSelector(state=> state.auth.isAuth);
      return isAuth ? children :<Navigate to ="/login"/>
}

function MainRoutes() {
  return (
    <Routes>
     
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/movie/:id" element={
         <PrivteRoute>
            <MovieDetail/>
         </PrivteRoute>
      }/>
        
    </Routes>
  )
}

export default MainRoutes
