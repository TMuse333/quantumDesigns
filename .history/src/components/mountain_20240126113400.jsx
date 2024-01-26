import React, { useEffect, useRef } from 'react';

const MountainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Make the background transparent
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the first line
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#00bfff';

    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(50, 150);
    ctx.closePath();
    ctx.stroke();

    // Draw the second line
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(50, 200);
    ctx.closePath();
    ctx.stroke();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={300} // Adjusted height for visibility
      style={{ width: '100%', maxWidth: '100%', background: 'transparent' }}
    />
  );
};

export default MountainCanvas;
