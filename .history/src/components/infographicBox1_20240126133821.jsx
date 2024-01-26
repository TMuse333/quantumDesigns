import React, { useEffect, useRef } from 'react';

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
      width={Math.min(420, window.innerWidth * 0.4)}  // Max width is 420 or 40vw, whichever is smaller
      height={Math.min(420, window.innerHeight * 0.4)}  // Max height is 420 or 40vh, whichever is smaller
      style={{ border: '1px solid #000', maxWidth: '420px', backgroundColor: '#015876' }}
    />
  );
};

export default InfographicBox1;
