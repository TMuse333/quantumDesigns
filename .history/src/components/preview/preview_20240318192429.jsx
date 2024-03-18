import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import striker from '../../images/quantum-striker-pose.png';
import q3 from 'src/images/q3-visuals-logo-2.svg';
import './preview.css'

const Preview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  const text = [
    {
      name: 'Warrior Blitz',
      description: 'Conquer your limits with Warrior Blitz, a relentless High-Intensity Interval Training program that unleashes strength, power, and unmatched determination for transformative results.',
    },
    {
      name: 'Zen Strike',
      description: 'Elevate your mind and body through Zen Strike, an unyielding Yoga regimen that cultivates strength, flexibility, and indomitable focus for a resilient and balanced life.',
    },
    {
      name: 'Iron Core',
      description: 'Forge an unbreakable core with Iron Core, a punishing workout designed to sculpt and strengthen your midsection, revealing the true power within your physical and mental core.',
    },
    {
      name: 'Hellfire Cardio',
      description: 'Incinerate calories and dominate your limits with Hellfire Cardio, an explosive and heart-pounding workout series that fuels your journey to unparalleled fitness and endurance.'
    },
  ];

  
  
  

  /*
   <ImageGallery
          style={{
           
             
          }}
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide}
        />
  */

  const images = [
    {
      original: q3,
      thumbnail: q3
    },
    {
      original: striker,
      thumbnail: striker,
    },
    // Add more images as needed
  ];

  const handleSlide = (index) => {
    setCurrentIndex(index);
    setPlaying(true); // Reset playing state on slide change
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  

  return (
    <div className="preview-container">
    <h2>Whats inside</h2>
    <h3>Here in an exclusive sneak peek at our wonderful program!</h3>
  
    {isDesktop ? (
      <>
        <div className="carousel-description-container">
        <div className="details-box"
            >
          {text.slice(0, 2).map((item, index) => (
           
            <div className="program-details" key={index}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
   
          ))}
                   </div>
          <div className="gallery-container">


          <ImageGallery
            style={{
              // Your styles here
            }}
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            onSlide={handleSlide}
          />
                    </div>
<div className="details-box">


                    {text.slice(-2).map((item, index) => (
            <div className="program-details" key={index}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
          ))}
          </div>
        </div>
      </>
    ) : <>
        <div className="gallery-container">


<ImageGallery
  style={{
    // Your styles here
  }}
  items={images}
  showThumbnails={false}
  showPlayButton={false}
  showFullscreenButton={false}
  onSlide={handleSlide}
/>
          </div>

          {text.map((text,index) => (
            <div className="program-details"
            key={index}>
    <h2>{text.name}</h2>
                <p>{text.description}</p>
            </div>
          ))}


    </>
    
    }
  </div>
  )
  
};

export default Preview;


