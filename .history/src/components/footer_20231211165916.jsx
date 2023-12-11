import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-info">
          <p>Email: info@quantumdesigns.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>123 Quantum Street, Cityville, QD 56789</p>
        </div>
        <Link to='/'>lol</Link>
        <div className="quick-links">
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link> */}
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/quantumdesigns">Facebook</a>
          <a href="https://twitter.com/quantumdesigns">Twitter</a>
          <a href="https://www.linkedin.com/company/quantumdesigns">LinkedIn</a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Quantum Designs</p>
      </div>
    </footer>
  );
};

export default Footer;
