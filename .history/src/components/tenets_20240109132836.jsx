import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

import { motion } from 'framer-motion';
import { useEffect,useRef,useState } from "react";
import { AnimatePresence} from 'framer-motion';
import TenetStar from "./tenetStar";
import { content1,content2 } from "../componentData/data";
import 
import '../styles/tenets.css'

const Tenets = () => {



    return (
        <div className="tenets-container">
            <div className="foreground">
                <h1 className="title-text">
                    Q3 Visuals
                </h1>
            </div>
<TenetStar/>
  
           
        </div>
    )
}


export default Tenets;