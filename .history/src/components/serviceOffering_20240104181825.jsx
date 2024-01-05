import React from "react";
import '../styles/serviceOfferings.css'

const ServiceOffering = () => {



    return (

  <div >

<h2 className="title-text">
    We offer the following services
</h2>

    <div className="service-offering-container">

        <div className="offered-service first">
            <img src=''/>

            <h1 className="title-text">
                React web dev
            </h1>

            <ul className="service-overview-list">
                <li>
                    Highly customizable
                </li>
                <li>
                    Visually appealing
                </li>
                <li>
                    Efficient state management
                </li>
                <li>
                    Extremely scalable and efficient to maintain
                </li>
            </ul>
        </div>

        <div className="offered-service second">
            <img src=''/>
            <h2 className="title-text">
                word press 
            </h2>
            <ul className="service-overview-list">
                <li>
                    Content Management system
                </li>
                <li>
                   SEO-friendly
                </li>
                <li>
                    Very user friendly
                </li>
                <li>
                   Lots of plugins
                </li>
            </ul>
        </div>
    </div>
    </div>
    )
}

export default ServiceOffering