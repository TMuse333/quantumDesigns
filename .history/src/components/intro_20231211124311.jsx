import React from "react";
import Skills from "./skills";
import '../styles/intro.css'


const Intro = () => {

{/* <p>Welcome to Quantum Visual Designs</p>
<h2>Crafting Disciplined Excellence for Your Website</h2>
<p>Experience the synergy of expertise and creativity as we meticulously transform your vision into a distinct digital reality. Your disciplined excellence, our design.</p> */}


    return (
        <div className="intro-container">
            {/* <p className="before-title-text">Welcome to Quantum visual designs</p> */}
            <h2 className="title-text intro"
            >
                 Great <span className="bold-700">Websites</span> are <span className="bold-700">Essential</span>
            </h2>
            <p className="description-text"
            >
            Having a <span className="bold-700">strong</span> online presence today is a <span className="bold-700">non negotiable</span> if 
            you want to be competitive and grow your brand. Here at Quantum Designs
            we use creative designs and scientific methods to give you that competitive
            advantage you need to succeed. 

            </p>
          <h2 className="">
          Quantum designs will you turn your
            vision into digital reality.
          </h2>
           
           
            <button className="button">Transform your vision today</button>




        </div>
    )
}

export default Intro