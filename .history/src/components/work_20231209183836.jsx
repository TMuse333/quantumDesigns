import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import

const WorkCarousel = () => {
  const settings = {
    // Configure the settings for your carousel
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {/* Your carousel slides go here */}
      <div>
        <img src="work1.jpg" alt="Work 1" />
      </div>
      <div>
        <img src="work2.jpg" alt="Work 2" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default WorkCarousel;
