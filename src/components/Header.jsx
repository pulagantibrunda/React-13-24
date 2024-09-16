
import React from "react";
import './Header.css';
function Header() {
    return (
      <header className="achieveRseit-header">
        <div className="logo-container">
          <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo" />
        </div>
        <nav>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#home">AllCourses</a></li>
            <li><a href="#home">Placements</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact">Review</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;