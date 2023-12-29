import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import ReactPlayer from "react-player";
import resume from '../images/resume.png';
import card from '../images/quantum-card-game.png';
import dunk from '../images/best_dunk.mp4';
import { Link } from "react-router-dom";
import { portfolio } from "./skillDesc";
import { motion, AnimatePresence } from "framer-motion";

const VideoSlide = ({ videoUrl, onPause }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div className="video-slide">
      <ReactPlayer
        url={videoUrl}
        playing
        controls
        width="100%"
        height="auto"
        onPause={onPause}
      />
      <button onClick={onPause} className="pause-button">
        Pause Video
      </button>
    </div>
  );
};

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
    {
      original: dunk,
    }
    // Add more images as needed
  ];

  const handleSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleVideoPause = () => {
setIsPlay
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

      <div className="image-text-box work">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide}
          renderItem={(item) => (
            <VideoSlide
              videoUrl={item.original}
              onPause={handleVideoPause}
            />
          )}
        />

        <div className="margin">
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
