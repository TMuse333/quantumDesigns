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
        <input type='text' placeholder='Company name (if applicable)' />
        <input type='text' placeholder='Phone number' />
        <input type='text' placeholder='Project details' />
       
      </div>

        <p className='description-text'>
            The laws of physics states that for every action,
            there is an equal and opposite reaction. Use this law everyday
            to create the reality you want.
        </p>

        <button className='button'>
            Submit
        </button>

    </div>
  );
};

export default Booking;
