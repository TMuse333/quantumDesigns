import { useState } from 'react'



import './App.css'
import Navbar from './components/navbar'

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
