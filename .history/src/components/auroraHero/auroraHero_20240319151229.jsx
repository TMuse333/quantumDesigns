import React from "react";
import { motion, useMotionTemplate } from "framer-motion";
import './auroraHero.css'




const AuroraHero = () => {

    const colors = ["#13FFAA","#1E67C6","#CE84CF",
'#DD335C']

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125%
        at 50% 0%, #020617 50%, ${color})`

return (
    <motion.section className="aurora-hero-container">
{/* salt */}
    </motion.section>
)

}

export default AuroraHero