import React from 'react'
import Navbar from './Components/Navbar'
import GlobalStyle from './GolbalStyles'
import Hero from './Components/Hero'
import { SliderData } from './Data/SliderData'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData}/> 
    </>
  )
}

export default App