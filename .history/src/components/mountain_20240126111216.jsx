import React, { useEffect, useRef } from 'react';

const MountainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Make the background transparent
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the mountain
    ctx.fillStyle = '#00bfff'; // Light Blue color
    ctx.beginPath()


    ctx.moveTo(0, canvas.height);
    ctx.lineTo(10,10)
    
    ctx.closePath();
    ctx.fill();

    // You can add more details, like snow on the mountain or other elements

  }, []);

  return (
    <canvas
      ref={canvasRef}
      height={600}
      width={window.innerWidth} // Set the width to the window's inner width
      style={{ width: '100%', maxWidth: '100%', background: 'transparent' }}
    />
  );
};

export default MountainCanvas;
