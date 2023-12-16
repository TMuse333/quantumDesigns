import React from "react";
import { useState } from "react";
import '../styles/process.css'
import { tenets } from "./skillDesc";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from "framer-motion";

const Process = () => {
    const [currentTenet, setCurrentTenet] = useState(0);

    const nextTenet = () => {
        setCurrentTenet((prevIndex) => (prevIndex + 1) % tenets.length);
    };

    const prevTenet = () => {
        setCurrentTenet((prevIndex) => (prevIndex - 1 + tenets.length) % tenets.length);
    };

    return (
        <div className="process-container">
            <h1 className="title-text">Our Tenets</h1>
            <p className="description-text">
                Q3 Visuals has developed an
                efficient system to ensure your website
                attracts more business and grabs attention.
                Here are our tenets to do so.
            </p>
           

            <div className="arrow-container">
                <IoIosArrowBack className="arrow arrow-left" onClick={prevTenet} />
                <div className="tenet">
                    <h2>{tenets[currentTenet].name}</h2>
                    <p>{tenets[currentTenet].description}</p>
                    <ul className="points">
                {tenets[currentTenet].points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
                </div>
                <IoIosArrowForward className="arrow arrow-right" onClick={nextTenet} />
            </div>
        </div>
    );
};

export default Process;
