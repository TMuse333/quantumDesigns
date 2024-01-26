import React, { useEffect } from 'react';

const Mountain = () => {
  useEffect(() => {
   

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
