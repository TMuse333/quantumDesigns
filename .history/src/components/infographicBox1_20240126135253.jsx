import React, { useEffect, useRef } from 'react';
import '../styles/infographicBox1.css';

const InfographicBox1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Add your drawing logic here

  }, []);



  return (
    <canvas
      ref={canvasRef}
      className="info-description"
      
    />
  );
};

export default InfographicBox1;
