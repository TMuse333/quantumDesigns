import React from "react";
import '../styles/serviceOfferings.css'
import { Link } from "react-router-dom";

const ServiceOffering = () => {



    return (

  <div >

<h2 className="title-text">
  Swift, Customizable web
  dev
</h2>

    <div className="service-offering-container">

        <div className="offered-service first">
            <img src=''/>

            <h1 className="title-text">
                React web dev
            </h1>

            <p className="description-text">
                We create very customizable websites
                with react js as opposed to standard web templates.
                This means we can create exactly the vision you want
                for your website without any limitations
            </p>

            <ul className="service-overview-list">
                <li className="description-text">
                   Stunning animations
                </li>
                <li>
                    Visually appealing layouts
                </li>
                <li>
                    More functionality
                </li>
                <li>
                    Very scalable and efficient to maintain
                </li>
            </ul>
            <Link to='react'>
                <button className="button">
                    Learn more
                </button>
            </Link>
        </div>

        {/* <div className="offered-service second">
            <img src=''/>
            <h2 className="title-text">
                word press services
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
        </div> */}
    </div>
    </div>
    )
}

export default ServiceOffering