import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="home">
          <Link to="/">Liu Yu-Jung</Link>
        </div>

        <nav className="menu">
          <ul className="menu-nav">
            <li><Link to="/game">Game</Link></li>
            <li><Link to="/ux">UX Design</Link></li>
            <li><Link to="/sound">Sound & Art</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;