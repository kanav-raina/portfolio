import React from 'react'
import '../style.css'
import logo from '../images/logo.gif';

const link={textDecoration:"none",color:"shite"}

const Navbar = () => {
    return (
        <div>
            <div className='navBar'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='menu'>
                <ul>
                    <li><a style={link} href="#">Home</a></li>
                    <li><a style={link} href="#about">About</a></li>
                    <li><a style={link} href='#blog'>Blog</a></li>
                    <li><a style={link} href="#projects">Projects</a></li>
                    <li><a style={link} href="#skills">Skills</a></li>
                    <li><a style={link} href='#contact-us'>Contact</a></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar
