import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';

const FullScreenSlide = ({ video, image, id, text, navId }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const elementRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 455);
  const [isElementInView, setIsElementInView] = useState(false);
  const [textPosition, setTextPosition] = useState(40);
  const [videoOpacity, setVideoOpacity] = useState(0.5);

  useEffect(() => {
    const observerCallback = (entries) => {
      const [entry] = entries;
      setIsElementInView(entry.isIntersecting);
      if (entry.isIntersecting) {
        setIsElementInView(true);
      } else {
        setIsPlaying(false);
        setIsElementInView(false);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.5,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsDesktop(screenWidth > 455);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${videoOpacity})`,
    transition: 'opacity 0.3s ease-in',
  };

  return (
    <>
      <div ref={elementRef} id={navId} className="full-slide-container">
        {!isDesktop && (
          <div ref={textRef} className="full-slide-text">
            <h3>{text.subtitle}</h3>
            <h1>{text.title}</h1>
          </div>
        )}
        {video ? (
          <motion.video
            ref={videoRef}
            id={id}
            className={`full-slide-video ${isDesktop ? 'desktop' : ''}`}
            controls
            autoPlay={isPlaying}
            muted
            loop
            style={textAtTop && isDesktop ? { transform: `scale(${videoScale})` } : null}
          >
            <source src={video} type="video/mp4" />
          </motion.video>
        ) : (
          <img
            id={id}
            className={`full-slide-image ${isDesktop ? 'desktop' : ''}`}
            src={image}
            style={textAtTop && isDesktop ? { transform: `scale(${imageScale})` } : null}
          />
        )}
        {isDesktop && (
          <motion.div
            className="overlay"
            style={overlayStyle}
            animate={{ opacity: textAtTop ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              ref={textRef}
              className="full-slide-text"
              animate={{ bottom: `${textPosition}%` }}
              transition={{ duration: 0.3 }}
            >
              <h3>free</h3>
              <h1>thugger</h1>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default FullScreenSlide;
