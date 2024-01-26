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

    const purpleHeight = height * 0.2;
c.fillStyle = '#4B0082'; // Dark Purple color
c.fillRect(0, height - purpleHeight, canvasWidth, purpleHeight);

    c.beginPath();
    c.moveTo(0, height/2);
    c.lineTo(width/2, height/2);
    c.closePath();
    c.stroke();





  }, []);

  return (
    <canvas
    style={{
        border:'1px solid #00bfff',
        marginTop:'0.5rem'
       
    }}
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      
    
    />
  );
};

export default MountainCanvas;
