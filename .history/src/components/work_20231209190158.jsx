import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import abu from '../images/aboubacar-5-fire.png';
import abu2 from '../images/aboubacar-6.jpg';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png';

const WorkCarousel = () => {
  const style = {
    width: '300px',
    marginRight:'auto',
    marginLeft:'auto',
    
    // transform:'translateX(-5rem)'
  };

  return (
    <Carousel>

        <div>
      
        <img src={abu} alt="Abu" style={style} />
 
      <img src={vegeta} style={style}/>

    
      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default WorkCarousel;
