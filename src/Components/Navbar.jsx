import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Movie Library</Link>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleNavbar}>Home</Link>
        <Link to="/login" onClick={toggleNavbar}>Login</Link>
        
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;