import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { attributes } from './skillDesc';
import davinci from '../images/davinci-quote.jpg'
import { Link } from 'react-router-dom';

import '../styles/tenets.css'


const Tenets = () => {
  


  return (
    <section className="skills-section"
    id="skills">

   
    
      <div className="tenets-container">
      <h2 className="title-text committed"><span className="bold-700">Committed</span> To <span className="bold-700">Creativity,</span> </h2>
      <h2 className='title-text committed inspired'><span className="bold-700">Inspired </span>By <span className="bold-700">Science. </span></h2>

      <img src={davinci}
      style={{
        width:'100vw'
      }}/>
<p className='description-text'>
    With so much content on the web today, standing out is crucial. We have formulated a unique process
    that uses the power of psychology, engaging visual tactics
    and creativity to ensure<br/> <span className="bold-700">your website stands out above the rest</span>.

</p>
<Link></Link>
<button className='button'>
  Learn our tenets of work
</button>

        {/* {attributes.map((skill, index) => (
         <motion.div
         key={index}
         id={`skill-${index}`} 
          className="attribute-container"
          style={
            {
                backgroundColor:'black'
            }
          }
         >
          <p className='attribute-name'>
            {skill.name}
            </p>
          <p className='attribute-desc'>
            {skill.description}
            </p>
         </motion.div>
        ))} */}
      </div>
    </section>
  );
};

export default Tenets;