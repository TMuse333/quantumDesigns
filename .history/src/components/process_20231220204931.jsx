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
            Q3
            </p>

 
     <div className="arrows">

     <IoIosArrowBack onClick={prevTenet} className="" />
     
     <div>
  {tenets.map((tenet, index) => (
    <div key={index} className='tenet-container'>
      <h2 className="tenet-title">{tenet.name}</h2>
      <p className="tenet-desc">{tenet.description}</p>
      {/* <ul className="points">
        {tenet.points.map((point, pointIndex) => (
          <li key={pointIndex}>{point}</li>
        ))}
      </ul> */}
    </div>
  ))}
</div>


<IoIosArrowForward onClick={nextTenet} className="" />

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
