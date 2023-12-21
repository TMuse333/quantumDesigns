import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import abu from '../images/aboubacar-5-fire.png';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png';
import ImageGallery from "react-image-gallery";
import resume from '../images/resume.png'
import card from '../images/quantum-card-game.png'
import '../styles/work.css'

import { Link } from "react-router-dom";

const WorkCarousel = () => {
  const img = [
    {
      original: resume,
      thumbnail: abu,
      
  // Set a constant width of 300px for all images
    },
    {
      original: card,
      thumbnail: vegeta,
    
    },
    // {
    //   original: majinVegeta,
    //   thumbnail: majinVegeta,

     
    // }
  ];

  return (
<div className="work-container">





    <h2 className="title-text bold-700">Creating digital excellence.</h2>
   
<p className="description-text">Creating digital excellence with every pixel and line of code. Here is some of our work</p>

<Link to='/portfolio'>



<button className="button work-button">explore portfolio</button>
</Link>

<div className="image-text-box">



   
    <ImageGallery items={img} showThumbnails={false}
    showPlayButton={false} 
    showFullscreenButton={false}
     />

     <p className="description-text">
     
     </p>

     </div>

</div>

  );
}

export default WorkCarousel;
