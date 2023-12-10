import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import abu from '../images/aboubacar-5-fire.png';
import abu2 from '../images/aboubacar-6.jpg';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png';

const WorkCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const style = {
    width: '100%',
    height: 'auto', // Adjust as needed
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={abu} alt="Abu" style={style} />
      </div>
      <div>
        <img src={abu2} alt="Abu 2" style={style} />
      </div>
      <div>
        <img src={vegeta} alt="Vegeta" style={style} />
      </div>
      <div>
        <img src={majinVegeta} alt="Majin Vegeta" style={style} />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default WorkCarousel;
