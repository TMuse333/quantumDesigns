import React from 'react'
import '../styles/booking.css'
import Navbar from './navbar'

const Booking = () => {

    return(
    <div className='booking-container'>
        <Navbar/>
        
        <h1 className='title-text'>
            You made the right choice
        </h1>
        <p className='description-text'>
            Lets get in contact so we can
        </p>
    </div>
    )
 
}

export default Booking