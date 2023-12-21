import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import abu from '../images/aboubacar-5-fire.png';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png';
import ImageGallery from "react-image-gallery";
import '../styles/work.css'
import { Link } from "react-router-dom";

const WorkCarousel = () => {
  const img = [
    {
      original: abu,
      thumbnail: abu,
      
  // Set a constant width of 300px for all images
    },
    {
      original: vegeta,
      thumbnail: vegeta,
    
    },
    {
      original: majinVegeta,
      thumbnail: majinVegeta,

     
    }
  ];

  return (
<div className="work-container">





    {/* <h2 className="title-text bold-700">Creating digital excellence.</h2> */}
   
<p className="description-text">Creating digital excellence with every pixel and line of code. Here is some of our work</p>
<Link to='/portfolio'>
{/* <h2 className="title-text bold-700">Creating digital excellence.</h2> */}
<p className=""

<button className="button work-button">explore portfolio</button>
</Link>

   
    <ImageGallery items={img} showThumbnails={false}
    showPlayButton={false} 
    showFullscreenButton={false}
     />

</div>

  );
}

export default WorkCarousel;
