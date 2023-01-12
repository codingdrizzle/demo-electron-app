import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import Logo from '../commons/logo'

const Navbar = () => {
    return (
        <nav>
            <Logo color='#333136'/>
            <div className='nav-links'>
                <Link className='nav-link'>our company</Link>
                <Link className='nav-link'>locations</Link>
                <Link className='nav-link'>contact</Link>
            </div>
        </nav>
    )
}

export default Navbar