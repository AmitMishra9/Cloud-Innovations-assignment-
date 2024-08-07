import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import MovieList from '../Pages/MovieList'
function Homepage() {
  return (
    <div className="container">
      <header className="navbar">
      <Navbar/>
      </header>
      <div className="content">
        <aside className="sidebar">
        <Sidebar/>
        </aside>
        <main className="main">
        <MovieList/>
        </main>
      </div>
    </div>
  );
}

export default Homepage;
