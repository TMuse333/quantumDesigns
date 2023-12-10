import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import abu from '../images/aboubacar-5-fire.png';

const WorkCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const containerStyle = {
    maxWidth: '800px', // Adjust as needed
    margin: '0 auto',  // Center the container
  };

  const slideStyle = {
    width: '19%', // Adjust as needed
    height: 'auto', // Adjust as needed
  };

  return (
    <div style={containerStyle}>
      <Slider {...settings}>
        <div>
          <img src={abu} alt="Abu" style={slideStyle} />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default WorkCarousel;
