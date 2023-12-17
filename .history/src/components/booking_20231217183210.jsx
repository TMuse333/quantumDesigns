import React from 'react';
import '../styles/booking.css';
import emailjs from 'emailjs-com';
import Navbar from './navbar';

const Booking = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_32u1f5x';
    const templateId = 'template_ubgz5ef';
    const userId = 'CN -9JmkFRgjxgmrg';

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='booking-container'>
      <Navbar />

      <h1 className='title-text booking-title'>
        Elevate your digital presence today
      </h1>
      <p className='description-text booking-p'>
        Let's get in contact so we can build your awesome website
      </p>
      <form onSubmit={sendEmail}>
        
      </form>
      <div className='info-box-container'>
        <input type='email' placeholder='Email' name='email' />
        <input type='text' placeholder='First Name' name='firstName' />
        <input type='text' placeholder='Last Name' name='lastName' />
        <input type='text' placeholder='Company name (if applicable)' name='companyName' />
        <input type='text' placeholder='Phone number' name='phoneNumber' />
        <input type='text' placeholder='Project details' name='projectDetails' />
      </div>

      <p className='description-text'>
        The laws of physics state that for every action,
        there is an equal and opposite reaction. Use this law every day
        to create the reality you want.
      </p>

      <button className='button' type="submit"
    >
        Submit request
      </button>
    </div>
  );
};

export default Booking;
