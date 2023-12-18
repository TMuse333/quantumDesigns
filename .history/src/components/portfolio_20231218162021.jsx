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
                Resume/personal Websites
            </h2>
            <p className="description-text">
                Is your google docs resume not getting you
                any callbacks? We can put you one step ahead of
                your competition with an indivudualized website
                showcasing how great of a person 
            </p>

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