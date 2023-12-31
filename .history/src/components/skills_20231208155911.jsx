import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { attributes } from './skillDesc';


import { useSkillContext } from '../context/context';

const Skills = () => {
  


  return (
    <section className="skills-section"
    id="skills">
      <h2 className="section-title">Skills and attributes</h2>
      <div className="skills-container ">
        {attributes.map((skill, index) => (
         <motion.div
         key={index}
         id={`skill-${index}`} 
          className="attribute-container"
          style={
            {
                backgroundColor:'yellow'
            //   backgroundImage:`url(${skill.background})`
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