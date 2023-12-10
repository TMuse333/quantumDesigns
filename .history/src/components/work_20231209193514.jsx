import React from "react";
import Slider from "react-slick";
import abu from '../images/aboubacar-5-fire.png';
import abu2 from '../images/aboubacar-6.jpg';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png';

  const WorkCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const style = {
    width: '300px'
  };

  return (
    <Slider {...settings}>
 <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
    </Slider>
  );
}

export default WorkCarousel
