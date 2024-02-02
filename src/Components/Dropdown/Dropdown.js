import React from 'react'
import styled from 'styled-components'
import { menuData } from '../../Data/MenuData'
import { FaTimes } from 'react-icons/fa'
import './Dropdown.css'

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const Dorpdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
        <div className='Icon' onClick={toggle}>
            <FaTimes />
        </div>
        <div>
            <div className='DropdownMenu'>
                {menuData.map((item, index) => (
                    <div className='DropdownLink' to={item.link} key={index}>
                        {item.title}
                    </div>
                ))}
            </div>
            <div className='BtnWrap'>
                <button to='/contact'>
                    Contact Us
                </button>
            </div>
        </div>
    </DropdownContainer>
  )
}

export default Dorpdown