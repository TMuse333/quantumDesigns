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

const ParallaxLayout = () => {


    return (
        <div 
        className="parallax-layout"
        >
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
           offset={1}
            speed={1}
            // style={{
            //     backgroundImage: `url(${q2})`,
            //     backgroundSize: 'cover',
            // }}
            >
               <Content {...content1}/>
            </ParallaxLayer>

                <Content

            </Parallax>
        </div>
    )
}


export default ParallaxLayout