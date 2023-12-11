import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { attributes } from './skillDesc';

import '../styles/skills.css'


const Skills = () => {
  


  return (
    <section className="skills-section"
    id="skills">
    
      <div className="skills-container">
      <h2 className="title-text committed"><span className="bold-700">Committed</span> To <span className="bold-700">Excellence</span> </h2>
<p className='description-text'>
    With so much content on the web today, its difficult to
    stand out. To stand out, we have formulated a unique process
    that uses the power of psychology, engaging visual tactics


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