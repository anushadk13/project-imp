import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <nav className="coloring">
      <div className="todisplay">
        <img src="./img/logo.jpeg" alt="Logo" height="92px" />
      </div>
      <div id="navbar" className="navbar">
        <ul>
          
          <li><a className="nav-link" href="kits.html">ARCHVIZ</a></li>
          <li><a className="nav-link active" href="enterprize.html">GAME LEVEL</a></li>
          <li><a className="nav-link" href="stories.html">AR VR</a></li>
        </ul>
      </div>
      <div id="navbars" className="navbar">
        <ul>
          <li><i className="fa-solid fa-magnifying-glass"></i></li>
          <li><i className="fa-solid fa-cart-arrow-down"></i></li>
          <li><i className="fa-solid fa-user"></i><span className="name">Sign In</span></li>
          <li><button>DOWNLOAD</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;