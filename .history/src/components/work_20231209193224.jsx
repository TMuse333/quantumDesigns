import React from "react";
import Slider from "react-slick";
import abu from '../images/aboubacar-5-fire.png';
import abu2 from '../images/aboubacar-6.jpg';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png';

export default function WorkCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const style = {
    width: 300
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={abu} alt="Slide 1" style={style} />
      </div>
      <div>
        <img src={abu2} alt="Slide 2" style={style} />
      </div>
      <div>
        <img src={vegeta} alt="Slide 3" style={style} />
      </div>
      <div>
        <img src={majinVegeta} alt="Slide 4" style={style} />
      </div>
    </Slider>
  );
}
