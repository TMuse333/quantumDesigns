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
import sand from '../images/sandy-bg.png'
const Tenets = () => {



    return (
  
       <Parallax pages={4}
       style={{
        position:'absolute',
        left:'0',
        backgroundColor:'rgb(75, 57, 1)'
       }}>




        <div className="tenets-container">
        <ParallaxLayer
        speed={1}
        factor={3}
        style={{
            backgroundImage:`url(${sand})`
        }}>

           <div className="foreground">

  
                <h1 className="title-text foreground">
                    Q3 Visuals

                </h1>
                <p className="description-text">
                    Scroll down to be parallaxed 
                    and see why we are the realest
                </p>
                </div>
            </ParallaxLayer>
<ParallaxLayer
offset={1}
style={{
    backgroundColor:'rgb(75, 57, 1)'
}}
>
<Content {...content1}
isAnimated={true}

/>
</ParallaxLayer>

<ParallaxLayer
offset={2}
    style={{
    backgroundColor:'rgb(75, 57, 1)'
}}
>


<Content {...content2}
isAnimated={true}/>
</ParallaxLayer>

  
           
        </div>
        </Parallax> 
    )
}


export default Tenets;