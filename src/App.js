import React, { useState } from 'react'
import Dorpdown from './Components/Dorpdown'
import Navbar from './Components/Navbar'
import GlobalStyle from './GolbalStyles'
import Hero from './Components/Hero'
import { SliderData } from './Data/SliderData'

const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dorpdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData}/> 
    </>
  )
}

export default App