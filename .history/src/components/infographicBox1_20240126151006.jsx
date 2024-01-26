import React, { useEffect, useRef } from 'react';
import '../styles/infographicBox1.css';

const InfographicBox1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    // Set the circle properties
    const centerX = (canvas.width / 2) -25 ;
    const centerY = (canvas.height / 2) - 25;
    const radius = Math.min(centerX, centerY) - 25; // 5 pixels from the canvas edge

    // Draw the dark grey circle border
    c.strokeStyle = '#333'; // Dark grey color
    c.lineWidth = 15; // Adjust the width of the stroke
    c.beginPath();
    c.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    c.stroke();

    // Fill the circle with #00bfff
    c.fillStyle = '#00516c';
    c.fill();

    // Add text inside the circle

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="info-1-container"
      width={450} // Assuming a fixed width for simplicity
      height={450} // Assuming a fixed height for simplicity
    />
  );
};

export default InfographicBox1;
