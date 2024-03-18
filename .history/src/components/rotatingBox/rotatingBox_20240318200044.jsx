import React from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import q3 from '../../images/q3-visuals-logo-2-no-bg.png';
import './rotatingbox.css';

const Example = ({image,id}) => {
  const blockVariants = {
    initial: {
      rotate: 0,
      height:'10vw',
      width:'10vw'
    
    },
    target: {
      rotate: 360,
     
    
    },
  };

  const rotate = useMotionValue(0);
  const scale = useTransform(rotate, [0, 270], [0, 1]);
  const imageControls = useAnimation();

  return (
    <motion.div id={id}
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
        duration: 4,
      }}
      onAnimationComplete={() => {
        // Animation completed, start fading in the image
        imageControls.start({ opacity: 1,
         });
      }}
    >
      <motion.img
        src={image}
        alt='Your Image'
        style={{ opacity: 0 }}
        variants={{ animate: { opacity: 1 } }}
        animate={imageControls}
      />
    </motion.div>
  );
};

export default Example;
