import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import q3 from '../../images/q3-visuals-logo-2-no-bg.png'
const Example = () => {
  const blockVariants = {
    initial: {
      rotate: 0,
    },
    target: {
      rotate: 360,
    },
  };

  const rotate = useMotionValue(0);
  const scale = useTransform(rotate, [0, 270], [0, 1]);
  const imageControls = useAnimation();

  useEffect(() => {
    const animationPromise = imageControls.start({ opacity: 1 }); // Fade in the image
    return () => animationPromise.stop(); // Cleanup animation on unmount
  }, [imageControls]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        style={{
          background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
          height: '100px',
          width: '100px',
          borderRadius: '10px',
          rotate,
          scale,
        }}
        variants={blockVariants}
        initial="initial"
        animate="target"
        transition={{
          ease: 'easeInOut',
          duration: 4,
        }}
        onAnimationComplete={() => {
          // Animation completed, start fading in the image
          imageControls.start({ opacity: 1 });
        }}
      />
      <motion.img
        src="your-image-url.jpg"
        alt="Your Image"
        style={{ opacity: 0, marginLeft: '20px' }}
        animate={imageControls}
      />
    </div>
  );
};

export default Example;
