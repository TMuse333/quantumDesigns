import { useState } from 'react'
import { Link } from 'react-router-dom'



import './App.css'
import Booking from './components/booking/booking'
import Layout from './components/layouts/layout'
import Testimonials from "./components/testimonials/testimonials"
import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";

import Overview from './components/overview/overview.jsx'
import Portfolio from './components/portfolio/portfolio'
import Infographic from'./components/infographic/infographic'




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

       <Route path='why-us'
      //  element={<ServiceOverview/>}
      element={<Infographic/>}
       >
          
       </Route>

   
    </Routes>




     </>
  )
}

export default App
