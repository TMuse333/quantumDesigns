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
      sizes: {
        width:'100px'
      } // Set a constant width of 300px for all images
    },
    {
      original: vegeta,
      thumbnail: vegeta,
      sizes: '300px'
    },
    {
      original: majinVegeta,
      thumbnail: majinVegeta,
      sizes: '300px'
    }
  ];

  return (
    <div className="gallery-container">
    <ImageGallery items={img} showThumbnails={false} />
    </div>
  );
}

export default WorkCarousel;
