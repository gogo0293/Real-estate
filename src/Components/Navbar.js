import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { menuData } from '../Data/MenuData'

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #000;
`

const Logo = styled(Link)`
    color: #fff;
    font-style: italic;
`

const MenuBars = styled.i``

const NavMenu = styled.i`
    display: flex;
    align-items: center;
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
    </Nav>
  )
}

export default Navbar