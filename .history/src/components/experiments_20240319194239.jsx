import React from "react";
import Content from "./content/content";
import Preview from "./preview/preview";
import Example from "./rotatingBox/rotatingBox";
import q3 from '../images/q3-visuals-logo-2-no-bg.png'
import AuroraHero from "./auroraHero/auroraHero";
import BorderAnimation from "./borderAnimation/borderAnimation";
import MountainParallax from "./mountainParallax/mountainParallax";
import Hero3 from "./herobanner3/herobanner3";


const Experiments = () => {


    return (
        <div className="experiments-container">
            <MountainParallax/>
            <div
            style={{
                position:'relative',
                zIndex:300
            }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi veniam cum culpa aliquid neque magnam ullam pariatur dignissimos. Voluptatum dolor nihil delectus repellendus officiis unde vel, doloribus sapiente sit fuga autem rerum, facilis aliquam consequatur dignissimos quasi. Enim itaque eos laboriosam consequatur molestias, corporis eveniet, eligendi expedita ipsa accusantium ad quas. Consequuntur, ducimus. Mollitia maiores nesciunt illo corrupti, repellendus optio neque enim aut distinctio beatae magnam obcaecati cupiditate eaque maxime corporis, saepe ex eius molestiae exercitationem! Odio, corrupti deserunt! Voluptate tenetur omnis ab hic repellat, alias molestias laboriosam iste ea, corrupti eius eaque illo adipisci. Ad quos ipsam, deleniti quae ipsum nulla consequuntur nam corporis inventore esse repellendus consequatur sint provident eveniet non cupiditate aliquid doloribus obcaecati repellat recusandae. Maxime repudiandae cumque veniam labore quas tenetur, quasi voluptates sunt ex molestias cupiditate non fugit suscipit placeat consectetur fugiat dicta dolorum, animi quae magnam aperiam laudantium earum minima debitis. Sed, molestias quam. Reiciendis harum perspiciatis cumque beatae cum iure inventore sed illo, omnis quo necessitatibus facilis itaque! A excepturi minima, dolores omnis deleniti, nesciunt optio rerum quam ullam iure odio odit ab cumque iste sed impedit minus reprehenderit sunt tempore nemo. Id, cum esse quidem quaerat obcaecati explicabo dolore iure pariatur?
            </div>
            {/* <Hero3/> */}
            {/* <AuroraHero/> */}
            {/* <BorderAnimation/> */}
            {/* <Preview/> */}
            {/* <Example/>
           <Content
           id='rotating-content'
           rotatingImage={true}
           image={q3}
           /> */}
        </div>

    )
}

export default Experiments