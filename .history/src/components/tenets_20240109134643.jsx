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
       <Parallax pages={4}>




        <div className="tenets-container">
        <ParallaxLayer>
           
                <h1 className="title-text">
                    Q3 Visuals

                </h1>
               
           
            </div>
            </ParallaxLayer>
           


<ParallaxLayer>



<Content {...content1}
isAnimated={true}
/>
</ParallaxLayer>

<ParallaxLayer>



<Content {...content2}
isAnimated={true}/>
</ParallaxLayer>

  
           
        </div>
        </Parallax> 
    )
}


export default Tenets;