import React from "react";
import { motion, useMotionTemplate, useMotionValue,
animate } from "framer-motion";
import './auroraHero.css'
import { useEffect } from "react";




const AuroraHero = () => {

    const colors = ["#13FFAA","#1E67C6","#CE84CF",
'#DD335C']

const color = useMotionValue(colors[0])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125%
        at 50% 0%, #020617 50%, ${color})`

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