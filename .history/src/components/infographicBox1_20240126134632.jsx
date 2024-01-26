import React, { useEffect, useRef } from 'react';
import '../styles/infographicBox1.css';

const InfographicBox1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Add your drawing logic here

  }, []);

  const calculateWidth = () => {
    if (window.innerWidth < 655) {
      // For screens below 655px wide, use 90% of the width
      return window.innerWidth * 0.9;
    } else {
      // For screens above 655px wide, use 40% of the width
      return window.innerWidth * 0.6;
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="info-1-container"
      width={Math.min(600, calculateWidth())}  // Max width is 420 or the calculated width, whichever is smaller
      height={Math.min(600, window.innerHeight * 0.4)}  // Max height is 420 or 40vh, whichever is smaller
    />
  );
};

export default InfographicBox1;
