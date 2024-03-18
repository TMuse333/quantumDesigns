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
               Digital Designs in their purest form
            </h2>
            <Link to='why-us'>

   
            <button className="button">
                Learn More
            </button>
            </Link>
            </div>
        </div>
    )
}


export default Hero3