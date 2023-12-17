import React from 'react';
import '../styles/booking.css';
import emailjs from '@emailjs/browser';
import Navbar from './navbar';
import { useRef } from 'react';

const Booking = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_32u1f5x';
    const templateId = 'template_ubgz5ef';
    const userId = 'CN_-9JmkFRgjxgmrg';

    // Access form data using form.current
    const formData = (form.current);

    emailjs.sendForm('service_32u1f5x', 'template_ubgz5ef', form.current, 'CN_-9JmkFRgjxgmrg')
      .then((result) => {
        console.log(result.text);
        console.log(form.current)
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
      <form onSubmit={sendEmail} ref={form}>
        <div className='info-box-container'>
          <input type='email' name='email' />
          <input type='text' placeholder='First Name' name='firstName' />
          <input type='text' placeholder='Last Name' name='last_Name' />
          <input type='text' placeholder='Company name (if applicable)' name='companyName' />
          <input type='text' placeholder='Phone number' name='phoneNumber' />
          <input type='text' placeholder='Project details' name='projectDetails' />
        </div>
        <input type="submit" value="Send" className='button'/>
     
      </form>
      <p className='description-text'>
          The laws of physics state that for every action,
          there is an equal and opposite reaction. Use this law every day
          to create the reality you want.
        </p>

       
    </div>
  );
};

export default Booking;
