import React from "react";
import { useState } from "react";
import '../styles/process.css'
import { tenets } from "./skillDesc";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from "framer-motion";


const Process = () => {

    const [currentTenet, setCurrentTenet] = useState(0)

    const nextTenet = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % tenets.length);
      };
    
      const prevTenet = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex - 1 + tenets.length) % tenets.length);
      };

    return (
        <div className="process-container">
            <h1 className="title-text">Our Tenets</h1>
            <p className="description-text">
                Q3 Visuals has developed an
                efficent system to ensure your website
                attracts more business and be attention grabbing.
                Here are our tenets to do so.
            </p>

            <div className="arrow-container">
      <IoIosArrowBack className="arrow arrow-left" onClick={prevTenet} />
     
    
      <div className="testimonial">
        <AnimatePresence  mode='wait'>
          <motion.p key={currentTenet} className="quote"
            initial={{ opacity: 0,x: -10 }}
            animate={{ opacity: 1, x:0 }}
             exit={{ opacity: 0 }}>
            {testimonials[currentTenet].quote}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="effect"
           initial={{ opacity: 0, }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
             >
            {testimonials[currentTestimonial].effect}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="author"
           initial={{ opacity: 0, y:30 }}
            animate={{ opacity: 1, y:0,transition: { delay: 0.7 } }}
             exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].author}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.p key={currentTestimonial} className="title"
          initial={{ opacity: 0, y:30 }}
          animate={{ opacity: 1, y:0,transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}>
            {tenets[currentTenet].name}
          </motion.p>
        </AnimatePresence>

       
      
      </div>
      <IoIosArrowForward className="arrow arrow-right" onClick={nextTenet} />
      </div>

        

   

            </div>
            
    )

}

export default Process