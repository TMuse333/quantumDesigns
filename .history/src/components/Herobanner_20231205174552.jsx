import React from "react";
import logo from '../images/quantum nation.jpeg'
import '../styles/herobanner.css'

const Herobanner = () => {



    return (
        <div className="herobanner-container">
            <img className="herobanner-logo"
            src={logo}/>
            <h1>Quantum designs</h1>
           <p>using the power of the quantum realm</p>
           
        </div>
    )

   
}

export default Herobanner