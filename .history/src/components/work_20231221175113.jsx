import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import resume from '../images/resume.png';
import card from '../images/quantum-card-game.png';
import '../styles/work.css';
import { Link } from "react-router-dom";
import { portfolio } from "./skillDesc";

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

      <div className="image-text-box">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide} // This callback is triggered when the slide changes
        />
        <p className="description-text">
         {portfolio[ind]}
        </p>
      </div>
    </div>
  );
}

export default WorkCarousel;
