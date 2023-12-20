import React, { useEffect } from "react";
import { useState } from "react";
import '../styles/process.css'
import { tenets } from "./skillDesc";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import Footer from "./footer";
import {Link} from 'react-router-dom'

const Process = () => {
    const [currentTenet, setCurrentTenet] = useState(0);

    const nextTenet = () => {
        setCurrentTenet((prevTenet) => (prevTenet + 1) % tenets.length);
      };
    
      const prevTenet = () => {
        setCurrentTenet((prevTenet) =>
          prevTenet === 0 ? tenets.length - 1 : prevTenet - 1
        );
      };


    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div 
            >

       <Navbar/>
       
        <div className="process-container">
            
            <h1 className="title-text">Our Tenets</h1>
            <p className="description-text">
            Experience enhanced website performance with Q3 Visuals. Elevate your business and captivate audiences. Discover our guiding principles.
            </p>

 
     <div className="arrows">

     <IoIosArrowBack onClick={prevTenet} className="arrow" />
     
            <div className="tenet-container">
  
            <AnimatePresence >
  <motion.div key={tenets[currentTenet]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h2 className="tenet-title">{tenets[currentTenet].name}</h2>
    <motion.p className="tenet-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {tenets[currentTenet].description}
    </motion.p>
    <ul className="points">
      {tenets[currentTenet].points.map((point, pointIndex) => (
        <motion.li key={pointIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {point}
        </motion.li>
      ))}
    </ul>
  </motion.div>
</AnimatePresence>
  


</div>

<IoIosArrowForward onClick={nextTenet} className="arrow" />

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
                             <Link to='/booking'>
                             <button className="button">
                                Level Up Today
                             </button>
                             </Link>
                           
                    </div>
                    <Footer/>    

        </div>

           

        </div>
    );
};

export default Process;
