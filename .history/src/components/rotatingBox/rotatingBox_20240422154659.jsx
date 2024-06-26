import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import q3 from '../../images/q3-visuals-logo-2-no-bg.png';
import './rotatingbox.css';
import { useInView } from 'react-intersection-observer';

const Example = ({ image, id, imageId }) => {
  const [rotationComplete, setRotationComplete] = useState(false); // State variable to track rotation completion

const imageRef = useRef()

const [inView, setInView] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 865)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const { top, bottom, height } = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const visiblePercent = (Math.min(windowHeight, bottom) - Math.max(0, top)) / height;

        // Set the threshold to 0.5, meaning at least 50% of the element is visible
        setInView(visiblePercent >= 0.5);
      }
    };

    handleScroll(); // Check initially
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 865) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
  
    handleResize(); // Call handleResize initially to set the initial state based on window width
  
    // Add event listener to handle window resize events
    window.addEventListener('resize', handleResize);
  
    // Remove event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after the component mounts

  const width = isMobile ? '90vw' : '48vw'

  const height = isMobile ? '60vw' : '58vw'

  const blockVariants = {
    initial: {
      rotate: 0,
      height: '10vw',
      width: '10vw'
    },
    target: {
      rotate: 360,
      height: rotationComplete ? height : '10vw',
      width: rotationComplete ? width : '10vw',
      maxWidth: '760px',
      maxHeight: '400px',
      transition:{
        height:{
            delay:0.75
        },
        width:{
            delay:0.75
        }
      }
    
    },
  };

  const rotate = useMotionValue(0);
  const scale = useTransform(rotate, [0, 270], [0, 1]);
  const imageControls = useAnimation();

  useEffect(() => {
    if (inView) {
      // Start the animation when the element is in view
      imageControls.start({ opacity: 1, transition: { delay: 0.75 } });
      setRotationComplete(true);
    }
  }, [inView]);

  return (
    <motion.div
      id={id}
      ref={ref}
      className='rotating-box content-image'
      style={{
        borderRadius: '10px',
        rotate,
        scale,
      }}
      variants={blockVariants}
      initial='initial'
      animate={inView ? 'target' : 'initial'} // Start animation only when in view
      transition={{
        ease: 'easeInOut',
        duration: 1,
      }}
    >
      <motion.img
        id={imageId}
        src={image}
        alt='Your Image'
        variants={{
          animate: {
            opacity: 1,
          }
        }}
        animate={imageControls}
      />
    </motion.div>
  );
};

export default Example;
