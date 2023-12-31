import React from "react";
import Navbar from "./navbar";
import Footer from './footer'
import '../styles/services.css'
// import {companyStats} from '../componentData/data'
import {companyServices} from '../componentData/data'
import Content from "./content";




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
            <Navbar links={links}
            />
            <div className="background-intro">
                <h1 className="title-text">
                    Services
                </h1>
                <p className="description-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit qui amet inventore. Cupiditate amet nobis corporis fuga, vitae aliquam officia nostrum aut error modi quis, provident a voluptatem iusto magni.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit, nam asperiores illum dolorum optio iure alias laboriosam praesentium sequi quaerat repellat perspiciatis ipsa sed pariatur impedit? Velit, autem veritatis.
                </p>
                <div className="services-box">
                      {companyServices.map((service) => (
                        <div className="service">
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

            <div className="service-closing">
             
             
                <Content 
                image={image}
                desc={text}
                hasTitle={true}
                link='https://calendly.com/thomaslmusial'
                linkText='Work with us'
                />

            </div>

<Footer
links={links}
/>
        </div>
    )

}


export default Services

