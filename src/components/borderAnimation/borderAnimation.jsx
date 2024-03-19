import React from 'react';
import { motion } from 'framer-motion';

const BorderAnimation = () => {
  return (
    <motion.div
      style={{
        width: 200, // Set your desired width
        height: 200, // Set your desired height
        border: '2px solid white', // Initial border style
        overflow: 'hidden', // Ensure border overflow is hidden
      }}
      animate={{ borderRightWidth: [0, 2], borderBottomWidth: [0, 2], borderLeftWidth: [0, 2], borderTopWidth: [0, 2] }}
      transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }} // Added ease property
    />
  );
};

export default BorderAnimation;
