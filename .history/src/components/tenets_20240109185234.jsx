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
import stars from '../images/stars.png'
import burj from '../images/burjkhalifa.png'
import building from '../images/building.png'
const Tenets = () => {



    return (
  
      <div className="tenets-container">
  <section className="parallax">
    <img src={stars} id='stars'/>
    <img src={burj} id='burj'/>
 <h2>bruh</h2>
    <img src={building} id='stars'/>
  </section>
      </div>
    )
}


export default Tenets;