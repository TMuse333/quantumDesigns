import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

import { motion } from 'framer-motion';
import { useEffect,useRef,useState } from "react";
import { AnimatePresence} from 'framer-motion';
import TenetStar from "./tenetStar";
import { content1,content2 } from "../componentData/data";
import Content from "./content";
import '../styles/tenets.css'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Tenets = () => {



    return (
       <Parallax pages={4}
       style={{
        position:'absolute',
        left:'0'
       }}>




        <div className="tenets-container">
        <ParallaxLayer
        style={{
            backgroundImage:'url${'
        }}>
           
                <h1 className="title-text">
                    Q3 Visuals

                </h1>
               
           

            </ParallaxLayer>
           


<ParallaxLayer
offset={1}>



<Content {...content1}
isAnimated={true}
/>
</ParallaxLayer>

<ParallaxLayer
offset={2}>



<Content {...content2}
isAnimated={true}/>
</ParallaxLayer>

  
           
        </div>
        </Parallax> 
    )
}


export default Tenets;