import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import abu from '../images/aboubacar-5-fire.png';
import abu2 from '../images/aboubacar-6.jpg';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png';
import ImageGallery from "react-image-gallery";

  const WorkCarousel = () => {


  const style = {
    width: '300px'
  };

  const img = [
    {
        original:abu,
        thumbnail:abu
    },
    {
        original:vegeta,
        thumbnail:abu
    },
    {
        original:majinVegeta,
        thumbnail:abu
    }

  ]

  return (
  
    <ImageGallery items={img}
    showThumbnails={false}
    original/>

    

    
  );
}

export default WorkCarousel
