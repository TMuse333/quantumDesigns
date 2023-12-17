import React from 'react';
import '../styles/booking.css';
import Navbar from './navbar';

const Booking = () => {
  return (
    <div className='booking-container'>
      <Navbar />

      <h1 className='title-text booking-title'>
        Elevate your digital presence today
      </h1>
      <p className='description-text booking-p'>
        Let's get in contact so we can build your awesome website
      </p>
      <div className='info-box-container'>
      <input type='email' placeholder='Email' />
        <input type='text' placeholder='First Name' />
        <input type='text' placeholder='Last Name' />
        <input type='text' placeholder='Projec' />
       
      </div>
    </div>
  );
};

export default Booking;
