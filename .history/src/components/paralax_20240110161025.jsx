import React from "react";
import { about1, } from "../componentData/data";

import Content from "./content";



import goku from '../images/goku-vs-jiren.jpg'
import { content1 } from "../componentData/data";
import { content2 } from "../componentData/data";
import Navbar from "./navbar";

import sand from '../images/sandy-bg.png'
import abu from '../images/aboubacar-6.jpg'
import '../styles/parallax.css'
const ParallaxLayout = () => {


    return (
       <div className="parallax-container">
     <header
     className='parallax-header'>

     
        <img src={sand}
        className="background"
        // style={{
        //     width:'100vw'
        // }}
        />

        {/* <img src={abu}
        style={{
            height:'30vh'
        }}
        className="foreground"/> */}
        <h1 className="title-text">
            Q3 Visuals
        </h1>
</header>
<section className='brown'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae recusandae incidunt repellat tenetur fugit cupiditate quidem aperiam sapiente numquam molestias quia accusantium, odio enim, reprehenderit ipsam corporis iusto error itaque ex nostrum expedita consequatur? A at iste aliquid! Atque, nesciunt aspernatur quisquam assumenda nulla fugit aperiam consequuntur dolores dolore, nihil eaque repellat minima nam similique cum qui est, accusantium voluptatum laboriosam ipsa ratione. Ad, facilis aliquam tempore blanditiis omnis voluptatem exercitationem inventore perferendis vero ipsam accusantium excepturi delectus repellat, eaque beatae totam placeat. Libero blanditiis enim non qui dolor! Accusantium officiis, ratione distinctio reiciendis earum quis corrupti totam odio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempora dicta optio, illum itaque provident alias laborum fugiat aliquid pariatur. Nihil dolorum necessitatibus unde ratione laborum obcaecati quibusdam fuga sit ipsa ad, nostrum, qui amet voluptas, veniam quo nulla impedit quis itaque atque provident quaerat sed error ex sapiente? Nemo repudiandae sequi quibusdam doloribus, unde nesciunt, itaque maiores eius obcaecati praesentium aliquam ex at ut architecto voluptate dolore commodi veniam? Reiciendis optio magni voluptatibus sit aliquid beatae delectus, id sint molestiae laborum et! Adipisci, consequuntur suscipit assumenda fugiat sunt, pariatur aut explicabo temporibus dolores nostrum voluptate totam vero labore. Ipsum!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem impedit temporibus minus iure molestias est ea, porro cupiditate provident, accusamus ratione, repudiandae dolorum ad corrupti tempore dignissimos fugit expedita consequatur quibusdam maiores eum perferendis delectus saepe! Quas doloremque atque debitis et. Ea, sequi dolores iusto nihil aperiam optio temporibus quam magnam corrupti dolorum dicta quasi et quisquam iure omnis odit praesentium aliquid culpa soluta voluptate. Voluptatum obcaecati accusamus ipsam cum. Excepturi culpa animi harum mollitia, necessitatibus suscipit odio est sed incidunt doloremque quas ea, ullam aperiam sapiente quo amet ipsam facilis, blanditiis rerum perspiciatis corporis quaerat dolores! Repudiandae iure blanditiis ullam voluptatibus velit delectus, molestias autem! Aspernatur, ullam, quod perspiciatis iusto consequatur corporis id asperiores illo et placeat pariatur qui ad quam eius animi provident unde magnam consectetur impedit cupiditate! Expedita ea praesentium optio cupiditate earum. In vitae explicabo sit, dolores eveniet dolorum similique aliquid quidem sed laboriosam doloremque earum consectetur itaque eum illum adipisci odit corporis cum fugit? Maiores et voluptatem possimus? Id quo consequatur facilis quasi quidem sapiente modi debitis tempora distinctio molestias ut quaerat nulla laboriosam nesciunt aut, architecto culpa, cum illum, dolor facere? Officia modi quas perferendis, cum accusantium enim fuga sunt alias corrupti error praesentium?
</section>

        
       </div>
    )
}


export default ParallaxLayout