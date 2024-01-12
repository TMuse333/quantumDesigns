import React, {useEffect,useState} from "react";
import logo from '../images/q3-visuals-logo-2-no-bg.png'
import '../styles/infographic.css'
import Navbar from './navbar'
import Typed from 'typed.js';
const Infographic = () => {

    const [isAnimated, setIsAnimated] = useState(false)

    useEffect(() => {
        
        // Your Typed.js initialization script
        var typed = new Typed('.future-text.info-header', {
          strings: ["Powerful and one of a kind websites"],
          typeSpeed: 50,
          backSpeed: 30,
          showCursor: false,
          cursorChar: '|',
          loop: false,
          onComplete: function (self) {
           
          }
        });
    
        // Cleanup the Typed instance when the component unmounts
        return () => {
          typed.destroy();
   
          
        };
      }, []); 

     

      const style = {
        opacity: isAnimated ? 1 : 0,
        transition: 'opacity 0.3s ease-in'
      }

    return (
        <div className="infographic-container">
            <Navbar/>

            <h1 className="future-text
            info-header">
                Powerful and one of
                a kind websites
                
            </h1>

            <p style={style}
            // className="description-text"
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laborum expedita vero, enim error aut recusandae voluptate accusamus debitis provident aliquid porro praesentium doloremque possimus dicta corrupti, iste, repellendus saepe veniam harum quaerat. Eaque modi fuga et, facilis in nobis deleniti sed nam laudantium voluptates, est minima pariatur reprehenderit iusto.
            </p>

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
             {/* Repudiandae, aut mollitia libero rem saepe eligendi. Dolorem ad reprehenderit vero aperiam! */}
          </p>
        </div>
      ))}

            </div>

        </div>
    )
}


export default Infographic