import React from "react";
import Content from "./content";
import ParticlesComponent from "./particles";
import { content1 } from "../componentData/data";
import { content2 } from "../componentData/data";
import Hero3 from "./herobanner3";
import MountainCanvas from "./mountain";

const Layout3 = () => {


    return (
        <>
        {/* <ParticlesComponent/> */}
        <div className="layout3">
            <MountainCanvas/>
            {/* <Hero3/> */}
            {/* <Content
            {...content1}/> */}
        </div>
        </>
    )
}


export default Layout3