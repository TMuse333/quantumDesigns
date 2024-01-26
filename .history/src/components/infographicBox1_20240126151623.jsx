import React, { useEffect, useRef } from 'react';
import '../styles/infographicBox1.css';

const InfographicBox1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 5; // 5 pixels from the canvas edge
    const gapCount = 10;

    const gapAngle = (2 * Math.PI) / gapCount;

    for (let i = 0; i < gapCount; i++) {
      const startAngle = i * gapAngle;
      const endAngle = (i + 1) * gapAngle;

      c.strokeStyle = '#333'; // Dark grey color
      c.lineWidth = 10; // Adjust the width of the stroke

      c.beginPath();
      c.arc(centerX, centerY, radius, startAngle, endAngle);
      c.stroke();
    }

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="info-1-container"
      width={450}
      height={450}
    />
  );
};

export default InfographicBox1;
