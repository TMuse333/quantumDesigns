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
    width: '300px',
    height:'200px'
    // Adjust as needed
  };

  return (
    <Slider {...settings}>
      <img src={abu} style={style}/>
      <img src={vegeta} style={style}/>
     
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default WorkCarousel;
