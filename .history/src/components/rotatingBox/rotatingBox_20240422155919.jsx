import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import './rotatingbox.css';
import { useInView } from 'react-intersection-observer';

const Example = ({ image, id, imageId }) => {
  const [rotationComplete, setRotationComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 865);
  const [ref, inView] = useInView({ triggerOnce: true,
  threshold:1 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 865);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      transition: {
        height: { delay: 0.75 },
        width: { delay: 0.75 }
      }
    },
  };

  const rotate = useMotionValue(0);
  const scale = useTransform(rotate, [0, 270], [0, 1]);
  const imageControls = useAnimation();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        imageControls.start({ opacity: 1, transition: { delay: 0.75 } });
        setRotationComplete(true);
      }, 500); // Adjust the delay time as needed
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
        position: 'relative'
      }}
      variants={blockVariants}
      initial='initial'
      animate={inView ? 'target' : 'initial'}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      <motion.img
        id={imageId}
        src={image}
        alt='Your Image'
        variants={{ animate: { opacity: 1 } }}
        animate={imageControls}
      />
    </motion.div>
  );
};

export default Example;
