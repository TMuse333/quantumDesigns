import React, {useRef} from "react";
import bottom from '../../images/bottom-mountain.png'
import top from '../../images/top-mountain.png'
import './mountainParallax.css'
import {motion, useScroll, useTransform} from 'framer-motion'

const MountainParallax = () => {

    const ref = useRef(null)

    
    return (
        <div className="mountain-parallax-container">
            
            <div className="full-mountain">

            </div>
         
          
<div className="bottom-mountain">

</div>
            
        </div>
    )
}

export default MountainParallax
