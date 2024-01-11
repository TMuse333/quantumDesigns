import React from "react";
import { about1, } from "../componentData/data";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
import Content from "./content";
import Herobanner2 from "./herobanner2";
import quantum from '../images/quantum-realm.png'


import goku from '../images/goku-vs-jiren.jpg'
import { content1 } from "../componentData/data";
import { content2 } from "../componentData/data";
import Navbar from "./navbar";

import sand from '../images/sandy-bg.png'


const ParallaxLayout = () => {


    return (
       <div className="parallax-container">
     <header>

     
        <img src={sand}
        className="background"
        style={{
            width:'100vw'
        }}/>

        <img src=''
        className="foreground"/>
        <h1 className="title-text">
            Q3 Visuals
        </h1>
</header>
<section>
    laurem 100
    
</section>

        
       </div>
    )
}


export default ParallaxLayout