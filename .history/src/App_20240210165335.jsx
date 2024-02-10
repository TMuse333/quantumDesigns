import { useState } from 'react'
import { Link } from 'react-router-dom'



import './App.css'

import Layout from './components/layouts/layout'
import Testimonials from "./components/testimonials/testimonials";
import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";



import Portfolio from './components/portfolio'
import Overview from './components/overview'
import Services from './components/services'
import ServiceOverview from './components/serviceOverview'
import ParallaxLayout from './components/paralax'
import Layout2 from './components/layouts/layout2'
import Tenets from './components/tenets'
import Infographic from './components/infographic'
import Layout3 from './components/layouts/layout3'
function App() {
  const [count, setCount] = useState(0)



  return (
    <>
  
    <Routes>
   
      <Route path='/' 
      element={<Layout/>}
      // element={<Layout3/>}
     
      />

      {/* <Route path='tenets' 
      
      element={<ParallaxLayout/>}
      >

      </Route> */}

      <Route path='booking' element={<Booking/>}>

      </Route>

      <Route path='about' 
      element={<Overview/>}
      // element={<About/>}
      >

      </Route>

      <Route path='portfolio'
       element={<Portfolio/>}></Route>

       <Route path='react'
      //  element={<ServiceOverview/>}
      element={<Infographic/>}
       >
          
       </Route>

   
    </Routes>




     </>
  )
}

export default App
