import React from 'react'
import '../styles/booking.css'
import Navbar from './navbar'

const Booking = () => {

    return(
    <div className='booking-container'>
        <Navbar/>
        
        <h1 className='title-text booking'>
            You made the right choice
        </h1>
        <p className='description-text'>
            Lets get in contact so we can build
            your awesome website
        </p>
    </div>
    )
 
}

export default Booking