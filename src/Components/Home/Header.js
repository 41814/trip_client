import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header2">
      <div className="header-background2">
        <img src="airlinee.jpg" alt="Pakistan Landscape" />
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src="logo12.webp" alt="Trip Planner Logo" />
        </div>
        <ul>
        <li><a href="/home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="/Tours">Tours</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/login">SingnIn</a></li>
        </ul>
      </nav>
      <div className="header-content">
        <div className="trip-planner-text">
          <h1><span>Welcome to Trip Planner</span></h1>
          <p>Your ultimate guide to exploring Pakistan!</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
