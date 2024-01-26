import React, { useEffect, useRef } from 'react';
import '../styles/infographicBox1.css';

const InfographicBox1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const outerRadius = Math.min(centerX, centerY) -10; // 25 pixels from the canvas edge
    const innerRadius = outerRadius - 50; // Adjust the size of the inner circle

    // Draw the dark grey circle border
    c.strokeStyle = '#333'; // Dark grey color
    c.lineWidth = 10; // Adjust the width of the stroke
    c.beginPath();
    c.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI);
    c.stroke();

    // Fill the outer circle with #00516c
    c.fillStyle = '#00516c';
    c.fill();

    // Draw the smaller white circle
    c.strokeStyle = '#fff'; // White color for the inner circle
    c.lineWidth = 5; // Adjust the width of the stroke for the inner circle
    c.beginPath();
    c.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI) ;
    c.stroke();

    // Fill the inner circle with white
 

    // Add text inside the circle

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="info-1-container"
      width={500}
      height={500}
    />
  );
};

export default InfographicBox1;
