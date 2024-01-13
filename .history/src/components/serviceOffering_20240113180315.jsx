import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceOfferings } from '../componentData/data';
import '../styles/serviceOfferings.css';

const ServiceOffering = ({ isAnimated }) => {
  const servicesRef = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (servicesRef.current) {
        const { top, bottom } = servicesRef.current.getBoundingClientRect();
        const inView = top >= 0 && bottom <= window.innerHeight;
        setIsVisible(inView);
      }
    };

    // Initial check on mount
    handleScroll();

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isVisible, controls]);

  const liVariants = {
    hidden: (index) => ({
      x: isAnimated ? (index % 2 === 0 ? -50 : 50) : 0,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const liTransition = { duration: 0.5 };

  return (
    <div ref={servicesRef}>
      <h2 className="title-text">Swift, Customizable web dev</h2>
      <div className="service-offering-container">
        <div className="offered-service">
          <p className="description-text">
            We don't use templates, we create awesome websites that are visually appealing and high-performing. Here are some advantages that come along with our websites.
          </p>
          <motion.ul className="service-list">
            {serviceOfferings.map((service, index) => (
              <motion.li
                key={index}
                className="service-point"
                variants={liVariants}
                custom={index}
                initial="hidden"
                animate={controls}
                transition={liTransition}
              >
                {service}
              </motion.li>
            ))}
          </motion.ul>
          <Link to="react">
            <button className="button">Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceOffering;
