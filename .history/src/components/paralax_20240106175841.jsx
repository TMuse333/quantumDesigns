import React from "react";
import { about1, } from "../componentData/data";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
import Content from "./content";
import Herobanner2 from "./herobanner2";
import quantum from '../images/quantum-realm.png'
import q2 from '../images/quantum2.jpeg'


const ParallaxLayout = () => {


    return (
        <div 
        className="parallax-layout"
        >
            <Parallax pages={4}>
            <ParallaxLayer speed={1}
            offset={2}
            factor={3}
            style={{
                backgroundImage: `url(${quantum})`,
                backgroundSize:'cover',
            }}>
                <h2 className="title=text">
                    Hustlers dont stop they keep going
                </h2>
 
            </ParallaxLayer>
            <ParallaxLayer offset={2}
            speed={1}
            style={{
                backgroundImage: `url(${q2})`,
                bac
            }}>
                <h2 className="title=text">
                  Quantum realm is awesome
                </h2>
            </ParallaxLayer>


            </Parallax>
        </div>
    )
}


export default ParallaxLayout