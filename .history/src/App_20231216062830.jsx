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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Routes>
   
      <Route path='/' 
      element={<Layout/>}
      />

      <Route path='process' element={<Process/>}

   
    </Routes>




     </>
  )
}

export default App
