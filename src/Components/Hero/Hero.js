import React from 'react'
import './Hero.css'

const Hero = ({ slides }) => {
  return (
    <div className='HeroSection'>
        <div className='HeroWrapper'>
            {slides.map((slide, index) => {
                return (
                    <div className='HeroSlide' key={index}>
                        <div className='HeroSlider'>
                            <img className='HeroImage' src={slide.image}/>
                            <div className='HeroContent'>
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                <button to={slide.path}>
                                    {slide.label}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    
  )
}

export default Hero