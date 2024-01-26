import React, { useEffect, useRef } from 'react';
import '../styles/infographicBox1.css';

const InfographicBox1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    // Styling for the text


    // Split the text into lines

  }, []);

  return (
    <canvas
      ref={canvasRef}
   className='info-description'
      width={Math.min(420, window.innerWidth * 0.5)}
      height={Math.min(420, window.innerHeight * 0.5)}
    />
  );
};

export default InfographicBox1;
