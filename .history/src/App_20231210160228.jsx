import { useState } from 'react'



import './App.css'
import Navbar from './components/navbar'
import Layout from './components/layout'
import Testimonials from "./com/testimonials";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Layout/>
     </>
  )
}

export default App
