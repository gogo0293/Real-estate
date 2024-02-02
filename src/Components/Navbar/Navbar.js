import React from 'react'
import { menuData } from '../../Data/MenuData'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({ toggle }) => {
  return (
    <div className='Nav'>
        <div className='Logo' to='/'>Gogo</div>
        <div className='MenuBars' onClick={toggle}><FaBars /></div>
        <div className='NavMenu'>
            {menuData.map((item, index) => (
                <div className='NavMenuLinks' to={item.link} key={index}>
                    {item.title}
                </div>
            ))}
        </div>
        <div className='NavBtn'>
            <button to='/contact'>Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar