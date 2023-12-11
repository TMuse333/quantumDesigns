import { useState } from 'react'
import { Link } from 'react-router-dom'



import './App.css'
import Navbar from './components/navbar'
import Layout from './components/layout'
import Testimonials from "./components/testimonials";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Link to="https://www.google.com"/>
<Layout/>

     </>
  )
}

export default App
