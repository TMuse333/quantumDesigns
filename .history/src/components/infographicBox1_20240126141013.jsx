import React, { useEffect, useRef } from 'react';
import '../styles/infographicBox1.css';

const InfographicBox1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Styling for the text
    ctx.fillStyle = '#ffffff'; // Set the text color
    ctx.font = '16px Arial'; // Set the font style

    // Description text
    const descriptionText = `
      Faster, faster ipsum dolor sit amet, consectetur adipisicing elit.
      Quo, incidunt.
      Reiciendis assumenda qui doloribus earum laborum iure aperiam,
      aut sapiente rem, iusto maxime, eum quam exercitationem aliquam nisi?
      Saepe facere est dolore, fugit beatae nihil eius?
      Nesciunt accusamus excepturi illo nemo, totam dolores repellendus,
      quaerat sunt itaque officia, impedit dolorem!
    `;

    // Split the text into lines
    const textLines = descriptionText.split('\n');

    // Set the starting position for the text
    let x = 10;
    let y = 30;

    // Loop through each line and draw it on the canvas
    textLines.forEach((line) => {
      ctx.fillText(line, x, y);
      y += 20; // Adjust the line height as needed
    });
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
