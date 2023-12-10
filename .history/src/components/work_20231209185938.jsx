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
  };

  return (
    <Carousel>
      <div>
        <img src={abu} alt="Abu" style={style} />
      </div>
      {/* <div>
        <img src={abu2} alt="Abu 2" style={style} />
      </div>
      <div>
        <img src={vegeta} alt="Vegeta" style={style} />
      </div>
      <div>
        <img src={majinVegeta} alt="Majin Vegeta" style={style} />
      </div> */}
      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default WorkCarousel;
