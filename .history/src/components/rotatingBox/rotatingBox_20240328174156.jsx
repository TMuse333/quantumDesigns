import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import q3 from '../../images/q3-visuals-logo-2-no-bg.png';
import './rotatingbox.css';

const Example = ({ image, id, imageId }) => {
  const [rotationComplete, setRotationComplete] = useState(false); // State variable to track rotation completion
  const ref = useRef(null);
  const isMobile = window.innerWidth < 865;

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const threshold = isMobile ? 0.5 : 0.8; // Adjust threshold as needed

      if (rect.top < window.innerHeight * threshold) {
        setRotationComplete(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check when the component mounts

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after the component mounts

  const width = isMobile ? '90vw' : '48vw';
  const height = isMobile ? '60vw' : '58vw';

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
    if (rotationComplete) {
      // Start the rotation animation when rotation is complete
      imageControls.start({
        rotate: 360, // Rotate the element 360 degrees
        transition: { duration: 1 }, // Set the duration of the rotation animation
      });
    }
  }, [rotationComplete, imageControls]);

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
      animate='target'
      transition={{
        ease: 'easeInOut',
        duration: 1,
      }}
    >
      <motion.img
        id={imageId}
        src={image}
        alt='Your Image'
        style={{ opacity: 0 }}
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
