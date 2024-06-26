import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

import { motion } from 'framer-motion';
import { useEffect,useRef,useState } from "react";
import { AnimatePresence} from 'framer-motion';
import TenetStar from "./tenetStar";

import '../styles/tenets.css'

const Tenets = () => {



    return (
        <div className="tenets-container">
            <div className="foreground">
                <h1 className="title-text">
                    Q3 Visuals
                </h1>
            </div>
            <div className="underground">
                <p className="description-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi illum nam libero reprehenderit ducimus! Laborum illum atque, exercitationem veniam delectus ipsam omnis eligendi ea nemo est, recusandae placeat optio ex!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolorum nisi quisquam explicabo et exercitationem pariatur! Deserunt ullam unde voluptate ratione quia numquam in, iusto laboriosam ipsa aperiam, tempora tenetur.lore
                </p>
            </div>
  
           
        </div>
    )
}


export default Tenets;