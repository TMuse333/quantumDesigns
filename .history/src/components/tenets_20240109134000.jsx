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

const Tenets = () => {



    return (
        <div className="tenets-container">
            <div className="foreground">
                <h1 className="title-text">
                    Q3 Visuals

                </h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam optio alias iste dolor repellat odit cumque! In perferendis unde ad hic nemo magni est sed aliquid qui possimus, eligendi iure?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam optio alias iste dolor repellat odit cumque! In perferendis unde ad hic nemo magni est sed aliquid qui possimus, eligendi iure?
           
            </div>
<div className="underground">



<Content {...content1}
isAnimated={true}
/>

<Content {...content2}
isAnimated={true}/>
</div>
  
           
        </div>
    )
}


export default Tenets;