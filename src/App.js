import React, { useState } from 'react'
import Dropdown from './Components/Dropdown/Dropdown'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { SliderData } from './Data/SliderData'
import InfoSection from './Components/InfoSection/InfoSection'
import { InfoData } from './Data/InfoData'

const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData}/> 
      <InfoSection {...InfoData}/>
    </>
  )
}

export default App