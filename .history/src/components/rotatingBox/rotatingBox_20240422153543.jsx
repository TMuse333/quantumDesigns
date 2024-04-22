import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

const Example = ({ image, id, imageId }) => {
  const [rotationComplete, setRotationComplete] = useState(false); // State variable to track rotation completion
  const imageRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const { top, bottom } = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        setIsInView(top < windowHeight && bottom >= 0);
      }
    };

    handleScroll(); // Check initially
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const width = isInView ? '90vw' : '10vw';
  const height = isInView ? '60vw' : '10vw';

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
      transition: {
        height: {
          delay: 0.75
        },
        width: {
          delay: 0.75
        }
      }
    },
  };

  const rotate = useMotionValue(0);
  const scale = useTransform(rotate, [0, 270], [0, 1]);
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Start the animation when the element is in view
      imageControls.start({ opacity: 1, transition: { delay: 0.75 } });
      setRotationComplete(true);
    }
  }, [isInView]);

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
