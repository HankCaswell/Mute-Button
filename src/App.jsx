import { useState, useEffect } from 'react'
import off from '../icons/off.svg'
import on from '../icons/on.svg'
import './App.css'




function App() {
  const[isMuted, setIsMuted] = useState(true)

  const handleClick = (e) => {
    e.preventDefault()
    setIsMuted(!isMuted)
  }

  return (
    <>
   <img 
   src={isMuted ? off : on} 
   alt="Toggle Sound"
   onClick= {handleClick}
   />
    </>
  )
}

export default App
