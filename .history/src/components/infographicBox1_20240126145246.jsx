import React, { useEffect, useRef } from 'react';
import '../styles/infographicBox1.css';

const InfographicBox1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) ; // 20 pixels from the canvas edge

    // Draw the dark grey circle
    c.strokeStyle = '#333'; // Dark grey color
    c.lineWidth = 2; // Adjust the width of the stroke
    c.beginPath();
    c.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    c.stroke();


  }, []);

  return (
    <canvas
      ref={canvasRef}
   className='info-description'
      width={Math.min(420, window.innerWidth * 0.4)}
      height={Math.min(420, window.innerHeight * 0.5)}
    />
  );
};

export default InfographicBox1;
