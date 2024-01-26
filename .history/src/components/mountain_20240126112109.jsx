import React, { useEffect, useRef } from 'react';

const MountainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Make the background transparent
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#00bfff';

    // Draw the mountain
    ctx.fillStyle = '#00bfff'; // Light Blue color
    ctx.beginPath();


   ctx.moveTo(50,50);

   ctx.moveTo(150,50);

   ctx.closePath()

   ctx.stroke();

    // You can add more details, like snow on the mountain or other elements

  }, []);

  return (
    <canvas
      ref={canvasRef}

      width={window.innerWidth} // Set the width to the window's inner width
      style={{ width: '200px', maxWidth: '100%', background: 'transparent',
    height:'100px' }}
    />
  );
};

export default MountainCanvas;
