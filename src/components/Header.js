import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../logo.png';

function Header() {
  return(
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/">
            <img src={logo} alt="RPXYZ" />
          </Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page">Page</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;