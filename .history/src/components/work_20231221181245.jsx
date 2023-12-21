import React, { useState,useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import resume from '../images/resume.png';
import card from '../images/quantum-card-game.png';
import '../styles/work.css';
import { Link } from "react-router-dom";
import { portfolio } from "./skillDesc";
import { motion, AnimatePresence } from "framer-motion";

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(0);


  const images = [
    {
      original: resume,
      thumbnail: resume,
    },
    {
      original: card,
      thumbnail: card,
    },
    // Add more images as needed
  ];

  useEffect(() => {
    setFade(0);

    const timeout = setTimeout(() => {
      setFade(1);
    }, 300); // Adjust the duration of the fade-in animation

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handleSlide = (index) => {
    setCurrentIndex(index);
    // Do whatever you need with the current index
    console.log('Current Index:', index);
  };

  return (
    <div className="work-container">
      <h2 className="title-text bold-700">Creating digital excellence.</h2>
      <p className="description-text">
        Creating digital excellence with every pixel and line of code. Here is some of our work
      </p>

      <Link to='/portfolio'>
        <button className="button work-button">explore portfolio</button>
      </Link>

      <div 
      className="image-text-box"
      >
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide} // This callback is triggered when the slide changes
        />
        <div>

        
        <AnimatePresence>
        <motion.p 
        key={currentIndex}
        style={{opacity: fade,
        transition:'all 0.3s ease-in',
      marginTop:'1rem'}}
      exit={{trans}}
        className="description-text">
         {portfolio[currentIndex].description}
        </motion.p>
        </AnimatePresence>
        </div>
       
      </div>
    </div>
  );
}

export default WorkCarousel;
