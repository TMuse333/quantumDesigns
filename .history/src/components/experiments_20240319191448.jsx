import React from "react";
import Content from "./content/content";
import Preview from "./preview/preview";
import Example from "./rotatingBox/rotatingBox";
import q3 from '../images/q3-visuals-logo-2-no-bg.png'
import AuroraHero from "./auroraHero/auroraHero";
import BorderAnimation from "./borderAnimation/borderAnimation";
import MountainParallax from "./mountainParallax/mountainParallax";
import Hero3 from "./herobanner3/herobanner3";


const Experiments = () => {


    return (
        <div className="experiments-container">
            <MountainParallax/>
            <Hero3/>
            {/* <AuroraHero/> */}
            {/* <BorderAnimation/> */}
            <Preview/>
            {/* <Example/>
           <Content
           id='rotating-content'
           rotatingImage={true}
           image={q3}
           /> */}
        </div>

    )
}

export default Experiments