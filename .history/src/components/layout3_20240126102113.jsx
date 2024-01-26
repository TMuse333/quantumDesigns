import React from "react";
import Content from "./content";
import ParticlesComponent from "./particles";
import { content1 } from "../componentData/data";
import { content2 } from "../componentData/data";

const Layout3 = () => {


    return (
        <>
        <ParticlesComponent/>
        <div>
            <Content
            {...content1}/>
        </div>
        </>
    )
}


export default Layout3