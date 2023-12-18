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

                <div className="personal-websites">

                
            <h2 className="title-text">
               Personal Websites
            </h2>
            <p className="description-text">
                Is your google docs resume not getting you
                any callbacks? We can put you one step ahead of
                your competition with an individualized website
                showcasing how great of a person you are and why
                an employer would be extremely lucky to have you.
            </p>

            <img src={resume}
            style={{
                width:'90vw',
                maxWidth:'500px'
            }}/>

            <a href="https://thomasmusial.com">view</a>

            </div>

            <div className="company-website">
                <h2 className="title-text">
                    Company Websites
                </h2>
                <p className="description-text">
                    Do you want to generate more business 
                    for your company? Q3 Visuals has got you covered.
                    We will put your product and services on a visually appealing
                    display, showcasing 

                </p>
            </div>
            
        </div>
    )
}

export default Portfolio