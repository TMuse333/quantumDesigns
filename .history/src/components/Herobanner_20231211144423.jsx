import React from "react";
import logo from '../images/quantum nation.jpeg'
import '../styles/herobanner.css'

const Herobanner = () => {

// "Visual Excellence, Quantum Innovation.
//In Quantum We Design, In Visuals We Thrive.
//Transforming Ideas into Quantum Realities
//Empowering Brands through Quantum Visuals.

    return (
        <div className="herobanner-container">
            <img className="herobanner-logo"
            src={logo}/>
            <h1>Quantum visual designs</h1>
           <p >Unleashing Creativity with Scientific Precision.</p>
            
        </div>
    )

   
}

export default Herobanner