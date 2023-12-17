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
                    animate={{ opacity: 1, transition:{delay:0.5} }}
                     exit={{ opacity: 0 }}
                    className="description-text tenet-desc"
                    >{tenets[currentTenet].description}
                    </motion.p>
                    </AnimatePresence>
                    <ul className="points">
                {tenets[currentTenet].points.map((point, index) => (
                    <AnimatePresence>

                    
                    <motion.li key={currentTenet}
                    initial={{opacity:0,x:-30}}
                    animate={{opacity:1,x:0, transition:{delay:0.7 + (index * 0.3)}}}
                    exit={{ opacity: 0,x:-30,y:0,transition:{delay:(index * 0.1)} }}
                    >{point}</motion.li>
                    </AnimatePresence>
                ))}
            </ul>
                </div>
                <IoIosArrowForward className="arrow arrow-right" onClick={nextTenet} />
                <IoIosArrowBack className="arrow arrow-left" onClick={prevTenet} />
            </div>

            <div className="video-container">
                        <h2 className="title-text bold-700">Our tenets in action</h2>
                        <div className="video-placeholder">
                           <p> coming soon!</p>
                        </div>
                    </div>

                    <div className="outro-container">
                    <p className="description-text small">
                            Its time to level up
                        </p>
                        <h1 className="title-text outro">
                             <span className='bold-700'>Elevate </span>Your Digital Presence <span className="bold-700">Today.</span>
                        </h1>
                       
                        <p className="description-text">
                            Take action now 
                        </p>
                    </div>


        </div>

                  

        </div>
    );
};

export default Process;
