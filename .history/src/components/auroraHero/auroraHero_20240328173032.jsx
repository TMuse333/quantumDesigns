import React from "react";
import { motion, useMotionTemplate, useMotionValue,
animate } from "framer-motion";
import './auroraHero.css'
import { useEffect } from "react";

const colors = [
    "#0080ff", // Slightly darker shade of blue
    "#00ccff", // Lighter shade of blue
    "#7f5af0", // Slight purple shade
    "#d8a5ff", // Lighter shade of the slight purple
  ];


const AuroraHero = () => {


      

const color = useMotionValue(colors[0])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125%
        at 50% 0%, #011117 50%, ${color})`

        const border = useMotionTemplate`1px solid ${color}`
const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

        useEffect(()=> {
            animate(color, colors, {
                ease: 'easeInOut',
                duration:10,
                repeat:Infinity,
                repeatType: 'mirror'

           })
        },[])

return (
    <motion.section className="aurora-hero-container"
    style={{
        backgroundImage

    }}>
        <div className="gradient-text">

       
       <h2 className="title-text">
       Transform Your Vision Today </h2> 
<p className='description-text'>
Websites are becoming more and more important everyday. With so many of websites out there you need one that stands out to attraction attention but simple enough for a effortless user experience.  </p>

<br/>
<br/>

<p className="description-text">
A great website can be the difference between your business thriving and having no one take you seriously. Would you trust someone with a non professional website or who doesn't even have one? Q3 Designs will take care of all these problems for you and deliver a fantastic website to turn your vision into reality.   </p>
       
       
       

        <motion.button
        whileHover={{
            scale:1.015
        }}
        whileTap={{
            scale: 0.985
        }}
        style={{
            border,
            boxShadow
        }}>
            Click Me
        </motion.button>
        </div>
{/* salt */}
    </motion.section>
)

}

export default AuroraHero