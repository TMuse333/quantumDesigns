import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceOfferings } from '../../componentData/data';
import './serviceOfferings.css';
import ExpandingBox from '../expandingBox/expandingBox';

const ServiceOffering = ({ isAnimated }) => {
  const servicesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const threshold = window.innerWidth < 655 ? 0.5 : 1; // Determine threshold based on screen width

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
        threshold: threshold, // Use dynamic threshold
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
  }, [threshold]); // Add threshold as a dependency to trigger useEffect when it changes

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
      <ExpandingBox text={'Customizable web solutions to grow your online brand'} />
      <div className="service-offering-container">
        <div className="offered-service">
          <p className="description-text">
            With so many websites online today, it is essential that you stand out. We don't use
            generic templates, instead we create custom built websites with so you stand out above
            the rest, here are some advantages of our websites
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
