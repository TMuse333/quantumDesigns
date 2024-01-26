import React, { useEffect, useRef } from 'react';

const MountainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Draw the sky
    ctx.fillStyle = '#87CEEB'; // Sky Blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the mountain
    ctx.fillStyle = '#8B4513'; // Saddle Brown
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(0, 800); // Adjusted mountain height to 800
    ctx.lineTo(150, 500);
    ctx.lineTo(300, 800);
    ctx.lineTo(canvas.width, 800);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.closePath();
    ctx.fill();

    // You can add more details, like snow on the mountain or other elements

  }, []);

  return <canvas ref={canvasRef} height={1030}
  width />;
};

export default MountainCanvas;
