import React from "react";
import logo from '../images/quantum nation.jpeg'
import '../styles/herobanner.css'

const Herobanner = () => {



    return (
        <div className="herobanner-container">
            <img className="herobanner-logo"
            src={logo}/>
            <h1>Quantum visual designs</h1>
           <p>Crafting Quantum Experiences, Elevating Your Digital Presence.</p>
            
        </div>
    )

   
}

export default Herobanner