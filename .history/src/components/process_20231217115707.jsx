import React from "react";
import { useState } from "react";
import '../styles/process.css'
import { tenets } from "./skillDesc";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";

const Process = () => {
    const [currentTenet, setCurrentTenet] = useState(0);

    const nextTenet = () => {
        setCurrentTenet((prevIndex) => (prevIndex + 1) % tenets.length);
    };

    const prevTenet = () => {
        setCurrentTenet((prevIndex) => (prevIndex - 1 + tenets.length) % tenets.length);
    };

    return (
        <div>

       <Navbar/>
       
        <div className="process-container">
            
            <h1 className="title-text">Our Tenets</h1>
            <p className="description-text">
                Q3 Visuals has developed an
                efficient system to ensure your website
                attracts more business and grabs attention.
                Here are our tenets to do so.
            </p>
           
          
            <div className="arrow-container">
               
                <div className="tenet">
                    
                    <AnimatePresence>

                    
                    <motion.h2
                     key={currentTenet}
                    initial={{ opacity: 0,x: -10 }}
                    animate={{ opacity: 1, x:0 }}
                     exit={{ opacity: 0 }}
                     className="title-text bold-700 tenet-title">{tenets[currentTenet].name}
                    </motion.h2>
                    </AnimatePresence>

                    <AnimatePresence>
                    <motion.p 
                    key={currentTenet}
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1,  }}
                     exit={{ opacity: 0 }}
                    className="description-text tenet-desc"
                    >{tenets[currentTenet].description}
                    </motion.p>
                    </AnimatePresence>
                    <ul className="points">
                {tenets[currentTenet].points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
                </div>
                <IoIosArrowForward className="arrow arrow-right" onClick={nextTenet} />
                <IoIosArrowBack className="arrow arrow-left" onClick={prevTenet} />
            </div>
        </div>
        </div>
    );
};

export default Process;
