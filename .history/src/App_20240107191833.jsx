import { useState } from 'react'
import { Link } from 'react-router-dom'



import './App.css'
import Navbar from './components/navbar'
import Layout from './components/layout'
import Testimonials from "./components/testimonials";
import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";
import Process from './components/process'
import Booking from './components/booking'

import Portfolio from './components/portfolio'
import Overview from './components/overview'
import Services from './components/services'
import ServiceOverview from './components/serviceOverview'
import ParallaxLayout from './components/paralax'
import Layout2 from './components/layout2'

function App() {
  const [count, setCount] = useState(0)

  // window.addEventListener('resize', () => {
  //   // Save the current scroll position
  //   const scrollPosition = window.scrollY;
  
    
  //   window.scrollTo(0, scrollPosition);
  // });

  return (
    <>
  
    <Routes>
   
      <Route path='/' 
      // element={<Layout/>}
      element={<Layout2/>}
     
      />

      <Route path='process' 
      // element={<Process/>}
      element={<Services/>}
      >

      </Route>

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
       element={<ServiceOverview/>}>
          
       </Route>

   
    </Routes>




     </>
  )
}

export default App
