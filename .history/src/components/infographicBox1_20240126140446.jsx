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
    const radius = Math.min(centerX, centerY) - 20; // 20 pixels from the canvas edge

    // Draw the dark grey circle
    c.strokeStyle = '#333'; // Dark grey color
    c.lineWidth = 2; // Adjust the width of the stroke
    c.beginPath();
    c.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    c.stroke();

    // Add text to the canvas
    c.fillStyle = '#333'; // Dark grey color for text
    c.font = '20px Arial'; // Set the font style
    c.textAlign = 'center'; // Center the text horizontally
    c.textBaseline = 'middle'; // Center the text vertically
    c.fillText('Your Text Here', centerX, centerY);

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="info-description"
      width={420} // Assuming a fixed width for simplicity
      height={420} // Assuming a fixed height for simplicity
    />
  );
};

export default InfographicBox1;
