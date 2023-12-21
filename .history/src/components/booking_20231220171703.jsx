import React, { useState, useRef,useEffect } from 'react';
import '../styles/booking.css';
import emailjs from '@emailjs/browser';
import Navbar from './navbar';
import logo from '../images/q3-visuals-logo-2.svg'
import Footer from './footer';
import nobg from '../images/q3-visuals-logo-2-no-bg.png'


const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_32u1f5x';
    const templateId = 'template_ubgz5ef';
    const userId = 'CN_-9JmkFRgjxgmrg';

    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    // Scroll to the top when the "submitted" state changes
    if (submitted) {
      window.scrollTo(0, 0);
    }
  }, [submitted]);

  useEffect(() =>{
    window.scrollTo(0,0)
  })

  return (
    <div className='booking-container'>
      <Navbar />





<div className='small'>




        <img src={nobg}
        style={{height:'30vh'}}
        />
        <p className='correct'>
          You have made an <span className='bold-700'>excellent </span> choice 
        </p>
      <h1 className='title-text booking-title'>
      
      </h1>
      {submitted ? (
        <div style={{
            height:'100vh'
        }}>
        <p className='description-text'>
          Thank you for your service! We'll get in touch with you shortly.
        </p>
        <button className='button'>
            Home
        </button>
        </div>
      ) : (
        <>
          <p className='description-text booking-p'>
            Let's get in contact so we can build your awesome website
          </p>
          <form onSubmit={sendEmail} ref={form}>
            <div className='info-box-container'>
              <input type='email' placeholder='Email' name='user_email' />
              <input type='text' placeholder='First Name' name='first_Name' />
              <input type='text' placeholder='Last Name' name='last_Name' />
              <input
                type='text'
                placeholder='Company name (if applicable)'
                name='company_Name'
              />
              <input type='text' placeholder='Phone number' name='phone_Number' />
              <input type='text' placeholder='Project details' name='project_Details' />
            </div>

            <p className='description-text'>
              The laws of physics state that for every action, there is an equal and
              opposite reaction. Use this law every day to create the reality you
              want.
            </p>

            <button className='button' type='submit'>
              Submit request
            </button>
          </form>
        </>
      )}

</div>

<div className='big'>
  
</div>
     

      {/* <Footer/> */}
    </div>
  );
};

export default Booking;
