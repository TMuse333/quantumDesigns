import React from "react";
import Navbar from "./navbar";
import Footer from './footer'
import '../styles/services.css'
// import {companyStats} from '../componentData/data'
import {companyServices} from '../componentData/data'
import Content from "./content";
import { Link } from "react-router-dom";




const Services = ({stats,services}) => {
    
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae, quis minus blanditiis, vel temporibus fugiat quos omnis porro dolor nostrum voluptatem animi debitis molestias laboriosam aliquid? Porro, sunt! Sapiente.'

    const links = [
        {
            dest:'/',
            name:'Home'
        },
        {
        dest:'/about-ceo',
        name :'About CEO'  
        },
      
        {
            dest:'/portfolio',
            name:'Our work'
        },
        
    ]

    return (
        <div className="services-container">
            <Navbar 
            // links={links}
            />
            <div className="background-intro">
                <h1 className="title-text">
                    Services
                </h1>
                <p className="description-text">
                Q3 Visuals specialzies in creating efficient and unique web designs to help grow your digital presence.
                We leverage state of the art technologies like react js, a programming language to create websites, to 
                create visually appealing and functional designs you need to take your business to the
                next level
                </p>
                <div className="line">

                </div>
            </div>

            {/* <div className="company-stats">
              
                   
            {companyStats.map((stat, index) => (
  <div
    className={`stat-box ${index % 2 === 0 ? 'red' : 'orange'}`}
    key={index} // Don't forget to add a unique key for each element in the array
  >
    <h2 className="title-text">{stat.name}</h2>
    <p className="description-text">{stat.description}</p>
  </div>
))}
            </div> */}

            <div className="company-services">
                <h1 className="description-text">
                    Here are our services
                </h1>
                <p className="description-text">
                   
                </p>
                <div className="services-box">
                      {companyServices.map((service) => (
                        <div className="service"
                        style={{
                            backgroundImage:`url(${service.background})`
                        }}>
                            <h2 className="title-text">
                                {service.name}
                            </h2>
                            <p className="description-text">
                                {service.description}
                            </p>
                            </div>
                      ))}
                </div>
            </div>

            <div className="closing-container">
                    <p className="description-text ">
                            Its time to level up
                        </p>
                        <h1 className="title-text outro">
                             <span className='bold-700'>Elevate </span>Your Digital Presence <span className="bold-700">Today.</span>
                        </h1>
                       
                        <p className="description-text">
                            Take action now and <span className='bold-700'>level up</span> your business, <span className='bold-700'>
                            win </span>  over your competition and <span className='bold-700'>
                             achieve </span> your goals with Q3 Visuals.</p>
                             <div className="alternative">
                             <p className="description-text bold-700 ">
                                ...Or do nothing
                             </p>
                             <p className="description-text">and not improve</p>
                             </div>
                            
                             <h3 className="description-text bold-700 choice">The Choice Is Yours.</h3>
                             <Link to='/booking'>
                             <button className="button">
                                Level Up Today
                             </button>
                             </Link>
                           
                    </div>

        <div className="pillars">

        </div>

<Footer
// links={links}
/>
        </div>
    )

}


export default Services

