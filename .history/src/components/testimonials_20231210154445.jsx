import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <h2 className="title-text">We deliver results.</h2>
      <p className='description-text'>Here are some of our testimonials </p>
      <div className="testimonial">
        <AnimatePresence exitBeforeEnter>
          <motion.p key={currentTestimonial} className="quote" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].quote}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence exitBeforeEnter>
          <motion.p key={currentTestimonial} className="effect" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].effect}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence exitBeforeEnter>
          <motion.p key={currentTestimonial} className="author" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].author}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence exitBeforeEnter>
          <motion.p key={currentTestimonial} className="title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].title}
          </motion.p>
        </AnimatePresence>

        <button onClick={prevTestimonial}>Previous</button>
        <button onClick={nextTestimonial}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
