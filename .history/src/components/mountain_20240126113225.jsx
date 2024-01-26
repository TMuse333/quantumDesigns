import React, { useEffect, useRef } from 'react';

const MountainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Make the background transparent
    ctx.fillStyle = 'transparent';
   

    // Draw a horizontal line
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#00bfff';

    


    ctx.beginPath()
    ctx.moveTo(50,100);
    ctx.lineTo(50,200);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath()
    ctx.moveTo(50,100);
    ctx.lineTo(50,150);
    ctx.closePath();
    ctx.stroke();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      

    />
  );
};

export default MountainCanvas;
