import React from 'react'
import '../style.css'
import logo from '../images/logo.gif';
import { Link } from 'react-router-dom';
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
                    <li><Link to='/blog'>Blog</Link></li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li><a href='#contact-us'>Contact</a></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar
