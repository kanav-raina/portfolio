import React from 'react'
import '../style.css'
import logo from '../images/logo.gif';
const Navbar = () => {
    return (
        <div>
            <div className='navBar'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='menu'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar
