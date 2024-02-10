import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      
        
       
        <div className="quick-links">
          <Link to="/process"
          className='link'
          >Our tenets
          </Link>
          <Link to="/booking"
          className='link'>Work with us</Link>
          <Link to="/portfolio"
          className='link'>Portfolio</Link>
          <Link to="/about"
          className='link'>About us
          </Link>
        </div>
   
       
      </div>

      <p>Q3 Visuals 2024</p>
    
    </footer>
  );
};

export default Footer;
