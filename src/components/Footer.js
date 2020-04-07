import React from 'react';
import './Footer.scss';
import heart from '../heart.png';

function Footer() {
  return(
    <footer className="footer">
      <div className="container">
        <p>Made with <img src={heart} alt="" /> using React</p>
      </div>
    </footer>
  )
}

export default Footer;