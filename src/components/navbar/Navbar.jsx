import React from 'react'
import './navbar.css'
import reactLogo from '../../assets/react.svg'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src={reactLogo} alt="logo" />
            </div>
            <div className='links'>
                <a href="/">
                    Home
                </a>
                <a href="/about">
                    About
                </a>
                <a href="/login">
                    Login
                </a>
                <a href="/register">
                    Register
                </a>
            </div>
        </nav>
    )
}

export default Navbar