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
        at 50% 0%, ##00bfff 50%, ${color})`

        useEffect(()=> {
            animate(color, colors, {
                ease: 'easeInOut',
                duration:10,
                repeat:Infinity,
                repeatType: 'mirror'

           })
        })

return (
    <motion.section className="aurora-hero-container"
    style={{
        backgroundImage

    }}>
        <h1>Being a real one is very important,</h1>
        <h2>Improve your focus and discipline</h2>
{/* salt */}
    </motion.section>
)

}

export default AuroraHero