import React from "react";
import { about1, } from "../componentData/data";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
import Content from "./content";
import Herobanner2 from "./herobanner2";
import quantum from '../images/quantum-realm.png'
import q2 from '../images/quantum2.jpeg'
import mustafar from '../images/mustafar.webp'
import goku from '../images/goku-vs-jiren.jpg'
import { content1 } from "../componentData/data";
import { content2 } from "../componentData/data";
import Navbar from "./navbar";
import ServiceOffering from "./serviceOffering";
import Testimonials from "./testimonials";

const ParallaxLayout = () => {


    return (
       <div className="parallax-containre">
     <header>
        
     </header>
        <img src=''
        className="background"/>

        <img src=''
        className="foreground"/>

        
       </div>
    )
}


export default ParallaxLayout