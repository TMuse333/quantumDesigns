import React, { useEffect, useRef } from 'react';

const MountainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

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


  }, []);

  return (
    <canvas
    style={{
        border:'1px solid #00bfff',
        height:'500px',
        width:'500px'
    }}
      ref={canvasRef}
      width={window.innerWidth}
      
    
    />
  );
};

export default MountainCanvas;
