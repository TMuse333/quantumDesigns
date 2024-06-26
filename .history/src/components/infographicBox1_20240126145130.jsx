import React, { useEffect, useRef } from 'react';
import '../styles/infographicBox1.css';

const InfographicBox1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Styling for the text
    ctx.fillStyle = '#cfd0d0'; // Set the text color
    ctx.font = '500 20px \'Palatino Sans\', \'Palatino Sans Informal\', \'Palatino Sans Text\', \'Palatino Sans W1G\', \'Palatino Sans W01\', sans-serif'; // Set the font style

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

  }, []);

  return (
    <canvas
      ref={canvasRef}
   className='info-description'
      width={Math.min(420, window.innerWidth * 0.5)}
      height={Math.min(420, window.innerHeight * 0.5)}
    />
  );
};

export default InfographicBox1;
