import React, {useRef} from "react";
import bottom from '../../images/bottom-mountain.png'
import top from '../../images/top-mountain.png'
import './mountainParallax.css'
import {motion, useScroll, useTransform} from 'framer-motion'

const MountainParallax = () => {

    const ref = useRef(null)

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['start start', 'end start']
    })

    const backgroundY = useTransform(scrollYProgress, [0,1], ['0%, 100%'])
    const textY =  useTransform(scrollYProgress, [0,1], ['0%, 200%'])
    return (
        <div className="mountain-parallax-container"
        ref={ref}>

            <motion.h1
            style={{
                y:textY
            }}>Parallax</motion.h1>
            
            <motion.div className="full-mountain"
            style={{
                y:backgroundY
            }}>

            </motion.div>
         
          
<div className="bottom-mountain">

</div>
            
        </div>
    )
}

export default MountainParallax
