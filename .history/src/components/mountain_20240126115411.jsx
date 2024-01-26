import React, { useEffect, useRef } from 'react';

const MountainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    // Make the background transparent
    c.fillStyle = 'transparent';
   
    const width = canvas.width

    const height = canvas.height

    console.log(width)
    // Draw the first line
    c.lineWidth = 2;
    c.strokeStyle = '#00bfff';

    c.beginPath();
    c.moveTo(0, height/2);
    c.lineTo(50, 90);
    c.closePath();
    c.stroke();


    const canvasWidth = 300;
const startXPercent = 0.01; // 10%
const endXPercent = 0.9; // 90%

const startX = canvasWidth * startXPercent;
const endX = canvasWidth * endXPercent;

c.beginPath();
c.moveTo(startX, 200);
c.lineTo(endX, 90);
c.closePath();
c.stroke();


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
