import React, { useEffect, useRef } from 'react';
import '../styles/infographicBox1.css';

const InfographicBox1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas resolution
    const devicePixelRatio = window.devicePixelRatio || 1;
    const canvasWidth = Math.min(420, window.innerWidth * 0.4);
    const canvasHeight = Math.min(420, window.innerHeight * 0.4);

    canvas.width = canvasWidth * devicePixelRatio;
    canvas.height = canvasHeight * devicePixelRatio;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    // Disable anti-aliasing
    ctx.imageSmoothingEnabled = false;

    // Your text drawing code...
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="info-description"
      width={Math.min(420, window.innerWidth * 0.4)}
      height={Math.min(420, window.innerHeight * 0.4)}
    />
  );
};

export default InfographicBox1;
