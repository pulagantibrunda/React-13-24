import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="achieveRseit-footer">
        <div className="footer-container">
          
          <div className="logo-container">
            <img
              src="https://www.achieversit.com/assets/images/logo-white.png"
              alt="logo"
            />
            <p></p>
          </div>

          <div className="footer-section company">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>

          
          <div className="footer-section courses">
            <h4>Trending Courses</h4>
            <ul>
              <li><a href="#course1">Web Development</a></li>
              <li><a href="#course2">Data Science</a></li>
              <li><a href="#course3">AI & Machine Learning</a></li>
              <li><a href="#course4">Digital Marketing</a></li>
            </ul>
          </div>

    
          <div className="footer-section info">
            <h4>Info</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

       
          <div className="footer-section social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i> 
              <i className="fab fa-twitter"></i> 
              <i className="fab fa-instagram"></i> 
              <i className="fab fa-linkedin-in"></i> 
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AchieveRseit. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
