import React from "react";
import { useState } from "react";
import '../styles/process.css'
import { tenets } from "./skillDesc";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Process = () => {

    const [currentTenet, setCurrentTenet] = useState(0)

    const nextTenet = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % tenets.length);
      };
    
      const prevTenet = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex - 1 + tenets.length) % tenets.length);
      };

    return (
        <div className="process-container">
            <h1 className="title-text">Our Tenets</h1>
            <p className="description-text">
                Q3 Visuals has developed an
                efficent system to ensure your website
                attracts more business and be attention grabbing.
                Here are our tenets to do so.
            </p>

        <div className="tenets-carousel">

        </div>

            </div>
            
    )

}

export default Process