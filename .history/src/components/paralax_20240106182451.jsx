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

const ParallaxLayout = () => {


    return (
        <div 
        className="parallax-layout"
        >

            <Navbar/>
            <Parallax pages={4}>
            <ParallaxLayer speed={1}
            // offset={1}
            factor={5}
            style={{
                backgroundImage: `url(${goku})`,
                backgroundSize:'cover',
                backgroundPosition: '50% 40%'
            }}>
 
            </ParallaxLayer>

  
            <ParallaxLayer 
           
            speed={2}
           
            >
               <Content {...content1}/>
            </ParallaxLayer>

                <ParallaxLayer
                speed={0.5}
                offset={0.75}
                sticky={{start:0.75, end: 0.8}}>
                    <Content {...content2}/>
                </ParallaxLayer>
                
                <ParallaxLayer
                speed={0.5}
                offset={2}>
                    <Content {...content2}/>
                </ParallaxLayer>

                <ParallaxLayer>
                    <ServiceOffering
                    offset={2.5/>
                </ParallaxLayer>

            </Parallax>
        </div>
    )
}


export default ParallaxLayout