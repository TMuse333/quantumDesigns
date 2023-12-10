import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import abu from '../images/aboubacar-5-fire.png';

const WorkCarousel = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={abu} alt="Abu" />
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default WorkCarousel;
