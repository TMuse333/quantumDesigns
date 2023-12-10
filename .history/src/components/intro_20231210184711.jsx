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
            <h2 className="title-text"
            >Transforming vision into a captivating website</h2>
            <p className="description-text"
            >
            Having a strong online presence today is a non negotiable if 
            you want to be competitive and grow your brand. Here at Quantum Designs
            we offer you that competitve advantage through creative designs
            and scient
           . Let Quantum Designs help you
            showcase yourself to the whole world with an attention

            </p>
            <button className="button">Transform your vision today</button>




        </div>
    )
}

export default Intro