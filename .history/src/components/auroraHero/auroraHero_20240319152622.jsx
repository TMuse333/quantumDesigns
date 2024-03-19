import React from "react";
import { motion, useMotionTemplate, useMotionValue,
animate } from "framer-motion";
import './auroraHero.css'
import { useEffect } from "react";




const AuroraHero = () => {

    const colors = [
        "#00bfff", // Main color
        "#0080ff", // Slightly darker shade
        "#66ccff", // Lighter shade
        "#ff6f61", // Complementary color 1
        "#ffb347", // Complementary color 2
      ];

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