import React from "react";
import Sphere from "./sphere";
import '../styles/hero3.css'


const Hero3 = () => {


    return (
        <div className="hero3-container">
            
            <h1 className="title-text">
                Q3 Visuals
            </h1>
            <Sphere size={2} position={{ x: 0, y: 0, z: 0 }} color={0x0000ff} />

            <h2 className="title-text">
                Unleashing creativity with scientific percision
            </h2>
        </div>
    )
}


export default Hero3