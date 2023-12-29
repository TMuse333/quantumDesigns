import React, { useState, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";

import resume from '../images/resume.png';
import card from '../images/quantum-card-game.png';

import { Link } from "react-router-dom";
import { portfolio } from "./skillDesc";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.css';

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

const images = [
  resume,card
]

  const handleSlide = (index) => {
    setCurrentIndex(index);
    setPlaying(true); // Reset playing state on slide change
  };

  const handleVideoPause = () => {
    setPlaying(false);
  };

  useEffect(() => {
    setPlaying(true); // Autoplay the first video
  }, []);

  return (
    <div className="work-container">
      <h2 className="title-text bold-700">Creating digital excellence.</h2>
      <p className="description-text">
        Creating digital excellence with every pixel and line of code. Here is some of our work
      </p>

      <Link to='/portfolio'>
        <button className="button work-button">explore portfolio</button>
      </Link>

      <div className="image-text-box work">

      <Carousel interval={null} activeIndex={currentIndex}
     
     onSelect={(index, e) => {
       e.preventDefault(); // Prevent the default action
       handleSlide(index);
     }}
   
   wrap={true}>
     {images.map((image, index) => (
       <Carousel.Item key={video.id}>
         {currentIndex === index && ( // Render the ReactPlayer only for the current index
           <img style={{
          width='300px' ,
            height='500px'
           }}
  
           
     />
         )}
       </Carousel.Item>
     ))}
   </Carousel>
       

        <div >
          <AnimatePresence>
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.7 } }}
              exit={{ transition: 'all 0.3s ease-in', opacity: 0 }}
              className="description-text margin-top"
            >
              {portfolio[currentIndex].description}
              <br />
              <button className="button">
                <motion.a
                  href={portfolio[currentIndex].link}
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.7 } }}
                  exit={{ transition: 'all 0.3s ease-in', opacity: 0 }}
                >
                  View
                </motion.a>
              </button>
            </motion.p>
          </AnimatePresence>
        </div>
       
      </div>
    </div>
  );
};

export default WorkCarousel;
