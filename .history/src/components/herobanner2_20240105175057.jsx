import React from "react";
import '../styles/herobanner2.css'
import { Link } from "react-router-dom";
import Sphere from "./sphere";



const Herobanner2 = () => {

    return (
        <div className="herobanner-container">
            <h1 className="title-text">
                Q3 Creations
            </h1>

            <div className="word-box">

           

            <p className="description-text">
                Unleashing Creativity with Scientific Precision
            </p>

            <Sphere size={2} position={{ x: 0, y: 0, z: 0 }} color={0x0000ff} />
            <Link to='about'>
            <button className="button">
                Discover Q3
                </button>
            </Link>
            </div>
           
        </div>
    )

}

export default Herobanner2