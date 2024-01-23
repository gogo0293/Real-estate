import React from 'react'
import './Hero.css'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div>
        <section className='showcase'>
            <header>
                <h2 className='logo'>Travel</h2>
            </header>

            <div className='overlay'></div>


            <div className='text'>
                <h2>Never Stop!</h2>
                <h3>Explore The World</h3>
                <p>Lorem asdad gdsklgf lhjup 
                    nknvr euweur xnvk pyukjx
                </p>
                <a href='#'>Explore</a>
            </div>

                <ul className='social'>
                    <li><a href='#'><FaFacebook /></a></li>
                    <li><a href='#'><RiTwitterXFill /></a></li>
                    <li><a href='#'><FaInstagram /></a></li>
                </ul>
        </section>

        <div className='menu'>
            <ul>
                <li>Home</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Hero