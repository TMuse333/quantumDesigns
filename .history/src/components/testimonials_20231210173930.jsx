import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import '../styles/testimonial.css';
import { testimonials } from "./skillDesc";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-container">
      <h2 className="title-text deliver">We deliver results.</h2>
      <p className='description-text'>Be the architect of your success. Start your journey with us and create your own success story </p>
      <div className="arrow-container">
      <IoIosArrowBack className="arrow arrow-left" onClick={prevTestimonial} />
     
    
      <div className="testimonial">
        <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="quote"
            initial={{ opacity: 0,x: -40 }}
            animate={{ opacity: 1, x:0 }}
             exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].quote}
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
            animate={{ opacity: 1, y:0 }}
             exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].author}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.p key={currentTestimonial} className="title"
          initial={{ opacity: 0, y:30 }}
          animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].title}
          </motion.p>
        </AnimatePresence>

       
      
      </div>
      <IoIosArrowForward className="arrow arrow-right" onClick={nextTestimonial} />
      </div>
    </div>
  );
}

export default Testimonials;
