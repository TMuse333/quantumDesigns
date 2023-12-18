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
import About from './components/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Routes>
   
      <Route path='/' 
      element={<Layout/>}
      />

      <Route path='process' element={<Process/>}>

      </Route>

      <Route path='booking' element={<Booking/>}>

      </Route>

      <Route path='about' element={<About/>}></Route>

      <Route path

   
    </Routes>




     </>
  )
}

export default App
