import React from "react";
import '../styles/herobanner2.css'
import { Link } from "react-router-dom";



const Herobanner2 = () => {

    return (
        <div className="herobanner-container">
            <h1 className="title-text">
                Q3 Visuals
            </h1>

            <div className="word-box">

          

            <p className="title-text">
                Unleashing Creativity with Scientific Precision
            </p>
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