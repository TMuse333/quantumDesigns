import React, { useEffect, useRef } from 'react';

const MountainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    // Make the background transparent
    ctx.fillStyle = 'transparent';
   

    // Draw the first line
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#00bfff';

    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(50, 90);
    ctx.closePath();
    ctx.stroke();


    const canvasWidth = 300;
const startXPercent = 0.01; // 10%
const endXPercent = 0.9; // 90%

const startX = canvasWidth * startXPercent;
const endX = canvasWidth * endXPercent;

ctx.beginPath();
ctx.moveTo(startX, 200);
ctx.lineTo(endX, 90);
ctx.closePath();
ctx.stroke();


  }, []);

  return (
    <canvas
    style={{
        border:'1px solid #00bfff',
       
    }}
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      
    
    />
  );
};

export default MountainCanvas;
