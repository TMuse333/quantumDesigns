import React, { useEffect } from 'react';

const Mountain = () => {
  useEffect(() => {
    const canvas = document.getElementById('mountainCanvas');
    const ctx = canvas.getContext('2d');

    function drawJaggedLine() {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      for (let x = 0; x <= canvas.width; x += 5) {
        const y = canvas.height - Math.random() * 100; // Adjust the amplitude as needed
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.fillStyle = '#8B4513'; // Saddle brown color
      ctx.fill();
    }

    drawJaggedLine();
  }, []);

  return (
    <canvas
      id="mountainCanvas"
      width="1030"
      height="auto"
      style={{ width: '100%', maxHeight: '1030px' }}
    ></canvas>
  );
};

export default Mountain;
