import React from "react";
import { Link } from "react-router-dom";
import Sphere from "../sphere";
import './hero3.css'


const Hero3 = () => {


    return (
        <div className="hero3-container">
            <div className='hero-contents'>

        
            <h1 className="title-text">
                Q3 Designs
            </h1>
            <Sphere size={2} position={{ x: 0, y: 0, z: 0 }} color={0x0000ff} />

            <h2 className="title-text">
                Unleashing creativity with scientific percision
            </h2>
            <Link
            <button className="button">
                Learn More
            </button>
            </div>
        </div>
    )
}


export default Hero3