import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceOfferings } from '../../componentData/data';
import './serviceOfferings.css';

const ServiceOffering = ({ isAnimated }) => {
  const servicesRef = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (servicesRef.current) {
        const { top, bottom } = servicesRef.current.getBoundingClientRect();
        const inView = top >= 0 && bottom <= window.innerHeight;
      
        if(inView){
            setIsVisible(true)
        }
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

  const liVariants = (index) => {
    const xPosition = index % 2 === 0 ? -80 : 80;
    const delay = index * 0.4; // Adjust the delay based on your preference
    return {
      hidden: { x: xPosition, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { delay,
    duration:0.4 } },
    };
  };

  return (
    <div ref={servicesRef}>
      <h2 className="title-text">Customizable web solutions
      to grow your online brand</h2>
      <div className="service-offering-container">
        <div className="offered-service">
          <p className="description-text">
            Your website is your first impression to your new clients, making it essential
            that it stands out and looks professional. It can also be
            the the place where you manage 
          </p>
          <motion.ul className="service-list">
            {serviceOfferings.map((service, index) => (
              <motion.li
                key={index}
                className="service-point"
                variants={liVariants(index)}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5 }}
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
