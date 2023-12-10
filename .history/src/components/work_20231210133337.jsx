import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import abu from '../images/aboubacar-5-fire.png';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png';
import ImageGallery from "react-image-gallery";
import '../styles/work.css'

const WorkCarousel = () => {
  const img = [
    {
      original: abu,
      thumbnail: abu,
      originalWidth:200,
      description: '<a href="https://example.com">Link 1</a>'
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
   
    <ImageGallery items={img} showThumbnails={false}
    showPlayButton={false} sho />

  );
}

export default WorkCarousel;
