import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { attributes } from './skillDesc';

import '../styles/skills.css'


const Skills = () => {
  


  return (
    <section className="skills-section"
    id="skills">
    
      <div className="skills-container ">
      <h2 className='title-text'>Unlocking Quantum Excellence: Where Possibilities Unfold in Web Design</h2>
<p className="description-text">Quantum, symbolizing more than the smallest details and where everything exists, inspires our approach. We apply collaborative, creative, and efficient principles to craft your exceptional website.</p>

<button className='button'>
  
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

export default Skills;