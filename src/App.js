import React, { useState } from 'react'
import Dorpdown from './Components/Dorpdown'
import Navbar from './Components/Navbar'
import GlobalStyle from './GolbalStyles'
import Hero from './Components/Hero'
import { SliderData } from './Data/SliderData'
import InfoSection from './Components/InfoSection'
import { InfoData } from './Data/InfoData'

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
      <InfoSection {...InfoData}/>
    </>
  )
}

export default App