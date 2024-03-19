import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import q3 from '../../images/q3-visuals-logo-2-no-bg.png';
import './rotatingbox.css';
import { useInView } from 'react-intersection-observer';

const Example = ({ image, id, imageId }) => {
  const [rotationComplete, setRotationComplete] = useState(false); // State variable to track rotation completion
  const [ref, inView] = useInView();
  const [mobile, setIsMobile] = useState(window.innerWidth < 865)


  useEffect(()=> {
    const handleResize = () => {
        if
    }
  })

  const blockVariants = {
    initial: {
      rotate: 0,
      height: '10vw',
      width: '10vw'
    },
    target: {
      rotate: 360,
      height: rotationComplete ? '60vw' : '10vw',
      width: rotationComplete ? '90vw' : '10vw',
      maxWidth: '760px',
      maxHeight: '400px'
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
