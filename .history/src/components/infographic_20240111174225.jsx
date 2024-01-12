import React from "react";
import logo from '../images/q3-visuals-logo-2-no-bg.png'
import '../styles/infographic.css'

const Infographic = () => {

    return (
        <div className="infographic-container">
          <div className="info-image-box">
            <div className="info-image">


            <img src={logo}
            style={{
                width:'250px'
            }}
            />
                        </div>
                        <div className="info-description">

  
             <p className="description-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Quo, incidunt. 
                 Reiciendis assumenda qui doloribus earum laborum iure aperiam, aut sapiente rem, iusto maxime, eum quam exercitationem aliquam nisi? Saepe facere est dolore, fugit beatae nihil eius? Nesciunt accusamus excepturi illo nemo, totam dolores repellendus, quaerat sunt itaque officia, impedit dolorem!
            </p>
            </div>
          </div>
         
           
         

            <div className="info-content">
            {[...Array(6)].map((_, index) => (
        <div key={index} className="content">
          <img src={logo} style={{ width: '100px' }} alt={`Logo ${index}`} />
          <p className="description-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Repudiandae, aut mollitia libero rem saepe eligendi. Dolorem ad reprehenderit vero aperiam!
          </p>
        </div>
      ))}

            </div>

        </div>
    )
}


export default Infographic