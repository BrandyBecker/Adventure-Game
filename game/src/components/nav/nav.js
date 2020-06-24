import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <h3>🌟 A Cat's Life 🌟</h3>
      <div class="navlinks">
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </div>
  );
}

export default Nav;
