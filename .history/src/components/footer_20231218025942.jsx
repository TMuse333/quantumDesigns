import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-info">
          <p>Email: Q3Designs@gmail.com</p>
          <p>Phone: (902) 999-1006</p>
        </div>
        
       
        <div className="quick-links">
          <Link to="pr"
          className='link'
          >Home
          </Link>
          <Link to="/services"
          className='link'>Services</Link>
          <Link to="/portfolio"
          className='link'>Portfolio</Link>
          <Link to="/contact"
          className='link'>About us
          </Link>
        </div>
   
       
      </div>
    
    </footer>
  );
};

export default Footer;
