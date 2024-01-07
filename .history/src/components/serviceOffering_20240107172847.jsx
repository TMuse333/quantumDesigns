import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {serviceOfferings} from '../componentData/data'
import '../styles/serviceOfferings.css'
const ServiceOffering = ({isAnimated}) => {
 
    const servicesRef = useRef(null);

 



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
               
               <div className='offered-service'
                    <h1 className='title-text'>
                        We got sauce
                    </h1>
                    <motion.ul className="service-list">
                     
                     {serviceOfferings.map((service,index) => (
                        <motion.li
                        className='service-point'>
                            {service}
                        </motion.li>
                     ))}

                    </motion.ul>
                    <Link to="react">
                        <button className="button">Learn more</button>
                    </Link>
                </div>
            </div>
      
    );
};

export default ServiceOffering;
