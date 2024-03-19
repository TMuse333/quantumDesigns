import React from "react";
import bottom from '../../images/bottom-mountain.png'
import top from '../../images/top-mountain.png'
import './mountainParallax.css'


const MountainParallax = () => {

    return (
        <div className="mountain-parallax-container">
            slat
            <div
            style={{
                backgroundImage:`url${top}`,
                backgroundPosition:'bottom',
                backgroundSize:'cover'
            }}/>
                <div style={{
                    backgroundImage:`url${bottom}`,
                    backgroundPosition:'bottom',
                    backgroundSize:'cover'
                }}
                />

           
        </div>
    )
}

export default MountainParallax