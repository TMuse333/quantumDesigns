import React from "react";
import logo from '../images/quantum nation.jpeg'
import '../styles/herobanner.css'
import q3 from '../images/q3-visuals-logo.svg'

const Herobanner = () => {

// "Visual Excellence, Quantum Innovation.
//In Quantum We Design, In Visuals We Thrive.
//Transforming Ideas into Quantum Realities
//Empowering Brands through Quantum Visuals.

    return (
        <div className="herobanner-container">
            <img className="herobanner-logo"
            src={q3}
            style={{
                width:'300px'
            }}/>
            <h1>Pure Visuals</h1>
           <p className="description-text">Unleashing Creativity with Scientific Precision.</p>
            
        </div>
    )

   
}

export default Herobanner