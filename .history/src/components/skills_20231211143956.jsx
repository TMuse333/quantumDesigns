import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { attributes } from './skillDesc';
import davinci from '../images/davinci-quote.jpg'

import '../styles/skills.css'


const Skills = () => {
  


  return (
    <section className="skills-section"
    id="skills">

   
    
      <div className="skills-container">
      <h2 className="title-text committed"><span className="bold-700">Committed</span> To <span className="bold-700">Creativity,</span> </h2>
      <h2 className='title-text committed'><span className="bold-700">Inspired </span>By <span className="bold-700">Science. </span></h2>

      <img src={davinci}
      style={{
        width:'400px'
      }}/>
<p className='description-text'>
    With so much content on the web today, standing out is crucial. We have formulated a unique process
    that uses the power of psychology, engaging visual tactics
    and creativity to ensure<br/> <span className="bold-700">your website stands out above the rest</span>.

</p>

<button className='button'>
  Learn our tenets of business
</button>

        {attributes.map((skill, index) => (
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
        ))}
      </div>
    </section>
  );
};

export default Skills;