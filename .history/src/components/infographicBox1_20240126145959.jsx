import React, { useEffect, useRef } from 'react';
import '../styles/infographicBox1.css';

const InfographicBox1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    // Set the circle properties
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 5; // 5 pixels from the canvas edge

    // Draw the dark grey circle border
    c.strokeStyle = '#333'; // Dark grey color
    c.lineWidth = 10; // Adjust the width of the stroke
    c.beginPath();
    c.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    c.stroke();

    // Fill the circle with #00bfff
    c.fillStyle = '#00bfff';
    c.fill();

    // Add text inside the circle
    const text = "Hustlers don't stop, they keep going!";
    c.fillStyle = '#fff'; // Text color
    c.font = '20px Palatino Sans, sans-serif'; // Font style
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText(text, centerX, centerY);

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className=""
      width={450} // Assuming a fixed width for simplicity
      height={450} // Assuming a fixed height for simplicity
    />
  );
};

export default InfographicBox1;
