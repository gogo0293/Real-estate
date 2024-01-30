import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { menuData } from '../Data/MenuData'
import { Button } from './Button'
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: red;
`

const Logo = styled(Link)`
    color: #fff;
    font-style: italic;
`

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 40%)
    }
`

const NavMenu = styled.i`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavMenuLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Navbar = () => {
  return (
    <Nav>
        <Logo to='/'>Gogo</Logo>
        <MenuBars />
        <NavMenu>
            {menuData.map((item, index) => (
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            ))}
        </NavMenu>
        <NavBtn>
            <Button to='/contact' primary='true'>Contact Us</Button>
        </NavBtn>
    </Nav>
  )
}

export default Navbar