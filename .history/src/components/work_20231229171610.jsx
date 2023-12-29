import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
// import card from '../media/quantum-video.mp4';
import dunk from '../media/best_dunk.mp4';
import card from '../media/short-quantum.mp4'
import oneLeg from '../media/one-leg-dunk.mp4'
import vert from '../media/standing-2-hander.mp4'
import '../styles/testimonials.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const videos = [
    {
      id: 1,
      title: 'The Quantum Card Game',
      src: oneLeg,
      credit: 'TMuse',
    },
    {
      id: 2,
      title: 'Dunking',
      src: dunk,
      credit: 'TMuse',
    },
    {
      id:3,
      title:'offvert',
      src:vert,
      credit: 'TMuse',
    }
  ];

  const descriptions = [
  
  
    {
      name:'Escalade',
      description:`"He is pure, give him your money"`
    },
    {
      name:'Lujain James',
      description:`"I make more back than i spend"`
    },
    {
      name:'Aboubacar',
      description:`"Wow he is such a real one"`

    },

   
    
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleSlide = (index) => {
    const scrollPosition = window.scrollY +300;

    setCurrentIndex(index);
    setIsPlaying(true);
  
   
    const style = {
      width:'20vw'
    }

      // window.scrollTo(-10, scrollPosition);

    
  };

  return (
    <div className='testimonial-container'
    id='testimonial'>

      <div className='testimonial-text-box'>

  <div className='image-box'>

  <div className='testimonial-intro'>
    <h1 className='title-text'>
      Testimonials
    </h1>
    <p className='description-text'>
      Everyone loves working with me because I am so great and you should too
    </p>
    <Link to='portfolio'>

    
    <button className='button layout-button'>
      view whole portfolio
    </button> 
    </Link>
  
  </div>






      <Carousel interval={null} activeIndex={currentIndex}
     
        onSelect={(index, e) => {
          e.preventDefault(); // Prevent the default action
          handleSlide(index);
        }}
      
      wrap={true}>
        {videos.map((video, index) => (
          <Carousel.Item key={video.id}>
            {currentIndex === index && ( // Render the ReactPlayer only for the current index
              <video className='testimonial-video'
              //  width='300px' 
              //  height='500px'
                controls>
                <source src={video.src} type="video/mp4"/>
              </video>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
      </div>

  

    

      <div className='testimonial-box'>
        <AnimatePresence>
          <motion.h2 className='title-text'
          key={currentIndex}
          initial={{opacity:0}}
          animate={{ opacity: 1, 
            transition: { delay: 0.7 } 
          }}
          exit={{transition:'all 0.3s ease-in',
        opacity:0}}
          >
            {descriptions[currentIndex].name}
          </motion.h2>

        </AnimatePresence>
        <AnimatePresence>
          <motion.p className='description-text'
          key={currentIndex}
          initial={{opacity:0}}
          animate={{ opacity: 1, 
            transition: { delay: 1 } 
          }}
          exit={{transition:'all 0.3s ease-in',
        opacity:0}}
          >
          {descriptions[currentIndex].description}
          </motion.p>

        </AnimatePresence>
      </div>

      </div>
      
    </div>
  );
};

export default Testimonials;