import React from "react";
import bottom from '../../images/bottom-mountain.png'
import top from '../../images/top-mountain.png'



const MountainParallax = () => {

    return (
        <div className="mountain-parallax-container">
            <div
            style={{
                backgroundImage:`url${top}`,
                backgroundPosition:'bottom',
                backgro
            }}/>
                <div style={{
                    backgroundImage:`url${bottom}`
                }}
                />

           
        </div>
    )
}

export default MountainParallax