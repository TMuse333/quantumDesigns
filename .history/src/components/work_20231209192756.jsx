import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/work.css'; // Create a CSS file for styling
import abu from '../images/aboubacar-5-fire.png';
import abu2 from '../images/aboubacar-6.jpg';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png';

const WorkCarousel = () => {
  const images = [abu, abu2, vegeta, majinVegeta];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="work-carousel">
      <motion.button
        className="carousel-button carousel-button-left"
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
      >
        Previous
      </motion.button>
      <motion.img
        className="carousel-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ duration: 0.5 }}
      />
      <motion.button
        className="carousel-button carousel-button-right"
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
      >
        Next
      </motion.button>
    </div>
  );
};

export default WorkCarousel;
