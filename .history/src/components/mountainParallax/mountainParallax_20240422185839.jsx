import React, { useRef, useState } from "react";
import bottom from '../../images/bottom-mountain.png'
import top from '../../images/top-mountain.png'
import './mountainParallax.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import StickyIntro from "../stickyIntro/stickyIntro";

const MountainParallax = () => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    // Calculate the opacity based on the scrollYProgress
    const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '250%'])

    // Track whether the text should be visible or not
    const [isVisible, setIsVisible] = useState(true);

    // Toggle visibility based on the scroll position
    const handleVisibility = () => {
        if (scrollYProgress.get() > 0.5) { // Change this threshold based on your design
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    return (
        <>
        <div className="mountain-parallax-container" ref={ref} onScroll={handleVisibility}>
            <motion.div className="parallax-text" style={{ y: textY, opacity: textOpacity, display: isVisible ? 'block' : 'none' }}>
                <motion.h1>Q3 Designs</motion.h1>
                <motion.h2>
                Elevating your digital presence
               with custom web solutions
                </motion.h2>
            </motion.div>

            <motion.div className="full-mountain" style={{ y: backgroundY }}></motion.div>

            <div className="bottom-mountain"></div>
        </div>
        </>
        <StickyIntro/>
    )
}

export default MountainParallax
