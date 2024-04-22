import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const FullScreenSlide = ({ video, image, id, text, navId }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const elementRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 455);

  const [videoOpacity, setVideoOpacity] = useState(0.5);

  const { scrollYProgress } = useScroll();

  // Define animation values
  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  useEffect(() => {
    const observerCallback = (entries) => {
      const [entry] = entries;
      setIsPlaying(entry.isIntersecting);
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
      setIsDesktop(window.innerWidth > 455);
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
          style={isDesktop ? { transform: `scale(${videoScale})` } : null}
        >
          <source src={video} type="video/mp4" />
        </motion.video>
      ) : (
        <img
          id={id}
          className={`full-slide-image ${isDesktop ? 'desktop' : ''}`}
          src={image}
        //   style={isDesktop ? { transform: `scale(${imageScale})` } : null}
        />
      )}
      {isDesktop && (
        <motion.div
          className="overlay"
          style={overlayStyle}
        //   animate={{ opacity: textPosition === 40 ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            ref={textRef}
            className="full-slide-text"
            style={{ y, opacity }}
          >
            <h3>lol</h3>
            <h1>meme</h1>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default FullScreenSlide;
