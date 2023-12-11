import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-info">
          <p>Email: info@quantumdesigns.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>123 Quantum Street, Cityville, QD 56789</p>
        </div>
       
        <div className="quick-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
   
       
      </div>
    
    </footer>
  );
};

export default Footer;
