import React, { useEffect, useRef } from 'react';
import '../InfographicBox1.css';

const InfographicBox1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Add your drawing logic here

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="info-1-container"
      width={Math.min(420, window.innerWidth * 0.4)}  // Max width is 420 or 40vw, whichever is smaller
      height={Math.min(420, window.innerHeight * 0.4)}  // Max height is 420 or 40vh, whichever is smaller
    />
  );
};

export default InfographicBox1;
