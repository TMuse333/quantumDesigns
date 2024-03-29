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
               
               <div className='offered-service'>


                        <p className='description-text'>
                            We dont use templates, we create awesome websites that are visually appealing
                            and high preforming. Here are some advantages
                            that come along with our websites
                        </p>
                    <motion.ul className="service-list">
                     
                     {serviceOfferings.map((service,index) => (
                        <motion.li
                        key={index}
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
            </div>
      
    );
};

export default ServiceOffering;
