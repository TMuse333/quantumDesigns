import React from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import q3 from '../../images/q3-visuals-logo-2-no-bg.png';
import './rotatingbox.css';

const Example = ({image}) => {
  const blockVariants = {
    initial: {
      rotate: 0,
      backgroundColor: 'rgba(255, 160, 174, 1)' // Start with the initial background color
    },
    target: {
      rotate: 360,
    //   backgroundColor: 'rgba(255, 160, 174, 0)' 
      // Change background color to transparent
    },
  };

  const rotate = useMotionValue(0);
  const scale = useTransform(rotate, [0, 270], [0, 1]);
  const imageControls = useAnimation();

  return (
    <motion.div
      className='rotating-box content-image'
      style={{
        // background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
        // height: '100px',
        // width: '100px',
        borderRadius: '10px',
        rotate,
        scale,
      }}
      variants={blockVariants}
      initial='initial'
      animate='target'
      transition={{
        ease: 'easeInOut',
        duration: 4,
      }}
      onAnimationComplete={() => {
        // Animation completed, start fading in the image
        imageControls.start({ opacity: 1 });
      }}
    >
      <motion.img
        src={q3}
        alt='Your Image'
        style={{ opacity: 0 }}
        variants={{ animate: { opacity: 1 } }}
        animate={imageControls}
      />
    </motion.div>
  );
};

export default Example;
