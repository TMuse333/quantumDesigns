import { useState } from 'react'



import './App.css'
import Navbar from './components/navbar'
import Layout from './components/layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Herobanner/>
<About/>
     </>
  )
}

export default App
