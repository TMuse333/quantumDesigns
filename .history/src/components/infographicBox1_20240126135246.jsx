import React, { useEffect, useRef } from 'react';
import '../styles/infographicBox1.css';

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
      className="info-description"
      width={Math.min(420, calculateWidth())}  // Max width is 420 or the calculated width, whichever is smaller
      height={Math.min(420, window.innerHeight * 0.4)}  // Max height is 420 or 40vh, whichever is smaller
    />
  );
};

export default InfographicBox1;
