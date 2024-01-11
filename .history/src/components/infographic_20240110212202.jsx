import React from "react";
import logo from '../images/q3-visuals-logo-2-no-bg.png'


const Infographic = () => {

    return (
        <div className="infographic-container">
          <div className="info-image-box">
            <img src={logo}
            style={{
                width:'300px'
            }}
            />
          </div>
          <div className="info-description">
            <p className="description-text"
          </div>
        </div>
    )
}


export default Infographic