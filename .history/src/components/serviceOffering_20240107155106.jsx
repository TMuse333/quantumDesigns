import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceOffering = ({isAnimated}) => {
 
    const servicesRef = useRef(null);

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const elementPosition = servicesRef.current.offsetTop;

        if (scrollPosition > elementPosition) {
            setIsAnimated(true);
            console.log('slat')
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Only run the effect once on component mount

    const liVariants = {
        hiddenLeft: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        hiddenRight: { x: 50, opacity: 0 },
    };

    const liTransition = { duration: 0.5 };

    return (
        <div ref={servicesRef}>
            <h2 className="title-text">Swift, Customizable web dev</h2>
            <div className="service-offering-container">
                <div className="offered-service first">
                    {/* ... Your existing code ... */}
                    <motion.ul className="service-overview-list">
                        {/* ... Your existing motion.li components ... */}
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
