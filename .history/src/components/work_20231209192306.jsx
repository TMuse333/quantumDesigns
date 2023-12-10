import React, { useState } from 'react';
import './CustomCarousel.css'; // Create a CSS file for styling

const CustomCarousel = ()) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="custom-carousel">
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

export default CustomCarousel;
