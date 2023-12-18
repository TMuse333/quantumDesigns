import React, { useEffect } from "react";
import { useState } from "react";
import '../styles/process.css'
import { tenets } from "./skillDesc";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import Footer from "./footer";

const Process = () => {
    const [currentTenet, setCurrentTenet] = useState(0);

    const nextTenet = () => {
        setCurrentTenet((prevIndex) => (prevIndex + 1) % tenets.length);
    };

    const prevTenet = () => {
        setCurrentTenet((prevIndex) => (prevIndex - 1 + tenets.length) % tenets.length);
    };

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{
            scrollBehavior: 'smooth',
            back
        }}>

       {/* <Navbar/>
       
        <div className="process-container">
            
            <h1 className="title-text">Our Tenets</h1>
            <p className="description-text">
            Experience enhanced website performance with Q3 Visuals. Elevate your business and captivate audiences. Discover our guiding principles.
            </p>
           
          
            <div className="arrow-container">
          
                <div className="tenet">
                <IoIosArrowBack className="process-arrow process-arrow-left" onClick={prevTenet} />
                <IoIosArrowForward className="process-arrow process-arrow-right" onClick={nextTenet} />
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
                    exit={{ opacity: 0,x:-20,y:0
                        // transition:{delay:(index * 0.1)}
                     }}
                    >{point}</motion.li>
                    </AnimatePresence>
                ))}
            </ul>
                </div>
               
               
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
                            Take action now and <span className='bold-700'>level up</span> your business, <span className='bold-700'>
                            win </span>  over your competition and <span className='bold-700'>
                             achieve </span> your goals with Q3 Visuals.</p>
                             <div className="alternative">
                             <p className="description-text bold-700 ">
                                ...Or do nothing
                             </p>
                             <p className="description-text">and not improve</p>
                             </div>
                            
                             <h3 className="description-text bold-700 choice">The Choice Is Yours.</h3>
                             <button className="button">
                                Level Up Today
                             </button>
                           
                    </div>
                    <Footer/>    

        </div> */}

           

        </div>
    );
};

export default Process;
