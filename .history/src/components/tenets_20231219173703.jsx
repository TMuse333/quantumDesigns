import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import davinci from '../images/davinci-quote.jpg'
import { Link } from 'react-router-dom';

import '../styles/tenets.css'


const Tenets = () => {
  


  return (
  




    
      <div className="tenets-container">
      <h2 className="title-text committed"><span className="bold-700">Committed</span> To <span className="bold-700">Creativity,</span> </h2>
      <h2 className='title-text committed inspired'><span className="bold-700">Inspired </span>By <span className="bold-700">Science. </span></h2>

<div className='image-text-box'>

<img src={davinci}
    />

    <div className='explaination'>
      
    </div>
  
<p className='description-text'>
    With so much content on the web today, standing out is crucial. We have formulated a unique process
    that uses the power of psychology, engaging visual tactics
    and creativity to ensure <span className="bold-700">your website stands out above the rest</span>.

</p>


<Link to='/process'
>
<button className='button'>
  Learn our tenets of work
</button>
</Link>
</div>

       
      </div>


  );
};

export default Tenets;