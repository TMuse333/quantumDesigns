import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import '../styles/portfolio.css'
import resume from '../images/resume.png'


const Portfolio = () => {


    return (
        <div className="portfolio-container">
            <h1 className="title-text">
                Our Work
            </h1>
            <p className="description-text">
                We are dedicated to
                creating the best content that
                we can, here is some of our work.
                Your masterpiece could be here next!
            </p>

            <h2 className="title-text">
                Personal Websites
            </h2>

            <img src={resume}
            style={{
                width:'90vw',
                maxWidth:'500px'
            }}/>

            <a href="thomasmusial.com">view</a>
            
        </div>
    )
}

export default Portfolio