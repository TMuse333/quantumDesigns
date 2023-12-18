import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import '../styles/about.css'


const About = () => {


    return (
        <div>

       
        <div className="about-container">
            <Navbar/>
            <h1 className="title-text">
                About Q3 Visuals
            </h1>
            <p className="description-text">
            Everyone is inherently predisposed to excel in a specific form of intelligence, where their innate strengths shine, be it in the realm of words, social skills, or other distinct abilities.
            The people at Q3 Visuals not surprisingly 
            posses higher than average visual intelligence.
            Our mission is to develop our visual capabilities
            to our highest level and use this skill to help other people
            like you elevate your digital presence. We are
            committed to improving everyday, and creating
            the best products we can.
            </p>

            <Footer/>
        </div>

        </div>
    )
}

export default About