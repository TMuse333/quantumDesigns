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
        <div 
        className="parallax-layout"
        >

            <Navbar/>
            <Parallax pages={10}>
            <ParallaxLayer speed={1}
            // offset={1}
            factor={10}
            style={{
                backgroundImage: `url(${q2})`,
                backgroundSize:'cover',
                backgroundPosition: 'center center'
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

                <ParallaxLayer
                 offset={3}
                 speed={2}>
                    <ServiceOffering
                   />
                </ParallaxLayer>

                <ParallaxLayer
                 offset={4}
                 speed={3}>
                 <Testimonials/>
                </ParallaxLayer>

            </Parallax>
        </div>
    )
}


export default ParallaxLayout