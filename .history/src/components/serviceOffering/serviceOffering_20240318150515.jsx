import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceOfferings } from '../../componentData/data';
import './serviceOfferings.css';

const ServiceOffering = ({ isAnimated }) => {
  const servicesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(servicesRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Change threshold as needed
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const liVariants = (index) => {
    const xPosition = index % 2 === 0 ? -80 : 80;
    const delay = index * 0.4; // Adjust the delay based on your preference
    return {
      hidden: { x: xPosition, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { delay, duration: 0.4 } },
    };
  };

  return (
    <div ref={servicesRef}>
      <h2 className="title-text">Customizable web solutions to grow your online brand</h2>
      <div className="service-offering-container">
        <div className="offered-service">
          <p className="description-text">
            Your website is your first impression to your new clients, making it essential
            that it stands out and looks professional. It can also be the place where you manage
            accounts and other vital aspects to your business. We ensure your website is custom
            built to attract attention and leave the viewing knowing that you are a professional.
          </p>
          <motion.ul className="service-list">
            {serviceOfferings.map((service, index) => (
              <motion.li
                key={index}
                className="service-point"
                variants={liVariants(index)}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
              >
                {service}
              </motion.li>
            ))}
          </motion.ul>
          <Link to="why-us">
            <button className="button">Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceOffering;
