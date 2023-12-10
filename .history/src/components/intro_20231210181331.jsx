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
            >Take on a quantum leap in web design with Quantum Visual Designs—where visionary expertise intertwines with boundless creativity. We transcend conventional boundaries, shaping your distinctive vision into a digital masterpiece. Immerse yourself in a quantum web experience that mirrors your unique identity and propels you into the future.
            </p>
            <button className="button">Transform your vision today</button>




        </div>
    )
}

export default Intro