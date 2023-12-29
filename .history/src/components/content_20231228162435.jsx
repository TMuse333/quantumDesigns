import React from "react";
import '../styles/content.css'

import { Link } from "react-router-dom";

const Content = ({img, title, description, rev,link,linkText}) => {


    return (
        <div className="content-container">
            <div className={`image-text-box ${rev ? 'reverse' : ''}`}>

                {rev ? (
                    // Render description-box before image-box if rev is true
                    <div className="description-box ">
                       {/* {title && <h2 className="title-text">{title}</h2>} */}
                        <p className='description-text'>
                            {description}     
                            {link != null && 
                     <Link to={link}>
                     <button className="button">{linkText}</button>
                  </Link>
                     }    
                         
                        </p>
                    </div>
                ) : null}

                <div className="image-box">
                    <h1 className="title-text">{title}</h1>
                    <img src={img} loading="lazy" className='content-image' />
                </div>

                {rev ? null : (
                   
                    <div className="description-box">
                         {/* {title && <h2 className="title-text">{title}</h2>} */}
                        <p className='description-text'>
                         
                         {description}

                         <br/>
                           
                     {link != null && 
                     <Link to={link}>
                     <button className="button">{linkText}</button>
                  </Link>
                     }    
                        </p>
                    </div>
                )}
                

            </div>

             

           
        </div>
    );
}

export default Content;