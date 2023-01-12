import React from 'react'
import Logo from '../commons/logo'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsFacebook, BsTwitter, BsYoutube, BsPinterest } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer className='footer'>
            {/* Halfway card */}
            <div className='halfway-card'>
                <div className='card-text'>
                    <h1>Let’s talk about<br />your project</h1>
                </div>
                <button className='card-btn'>GET IN TOUCH</button>
            </div>
            {/* Halfway card */}
            <nav style={{marginBottom: 40}}>
                <Logo color='#fff' />
                <div className='nav-links'>
                    <Link className='nav-link link-light'>our company</Link>
                    <Link className='nav-link link-light'>locations</Link>
                    <Link className='nav-link link-light'>contact</Link>
                </div>
            </nav>
            <hr style={{width: '100%', opacity: 0.1}} />
            <div className='footer-details' style={{marginTop: 30}}>
                <div className='location-details'>
                    <p style={{fontWeight: 800}}>Designo Central Office</p>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className='contact-details'>
                    <p style={{fontWeight: 800}}>Contact Us (Central Office)</p>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </div>
                <div className='social-media'>
                    <IoLogoWhatsapp size={40}/>
                    <BsFacebook size={40}/>
                    <BsTwitter size={40}/>
                    <BsYoutube size={40}/>
                    <BsPinterest size={40}/>
                    <AiFillInstagram size={40}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer