import React, { useState } from 'react';
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
      <button className="carousel-button" onClick={prevSlide}>
        Previous
      </button>
      <img className="carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="carousel-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default WorkCarousel;
