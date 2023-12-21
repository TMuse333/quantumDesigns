import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import '../styles/about.css'
import tom from '../images/tom-in-suit-2.jpg'
import about from '../images/be-about-it.png'
import abu from '../images/aboubacar-5-fire.png'


const About = () => {


    return (
        <div>
  <Navbar/>
       
        <div className="about-container">
          
            <h1 className="title-text">
                About Q3 Visuals
            </h1>
            <p className="description-text">
            Everyone is inherently predisposed to excel in a specific form of intelligence, where their innate strengths shine, be it in the realm of words, social skills, or other distinct abilities.
            The people at Q3 Visuals not surprisingly 
            posses higher than average visual intelligence.
           
            </p>

            <p className="description-text">
            Our mission is to develop our visual capabilities
            to our highest level and use this skill to help other people
            like you elevate your digital presence. We are
            committed to achieving our max potential as creatives and creating
            the best products we can.
            </p>

            <h2 className="title-text">
                About the Creator
            </h2>

            <

            <img src={about}
            style={{
                width:'90vw',
                // height:'500px'
            }}
            />

            <p className="description-text">
                Thomas Musial is a man who believes
                in hard work and discipline everyday
                to achieve his full potential and
                to live a life worth living. He enjoys working on websites,
                drawing, becoming strong and healthy in the gym,
                meditating and doing whatever else it takes to live the 
                best life possible.
            </p>

            <img src={abu}
            style={{
                width:'90vw'
            }}/>

            <h2 className="title-text bold-700">
                Hustlers dont stop they keep going!
            </h2>

            <Footer/>
        </div>
 
        </div>
    )
}

export default About