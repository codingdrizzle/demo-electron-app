import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/oval.png'
const Logo = ({color}) => {
  return (
      <Link to={'/'} className='company-name' style={{color: color}}>
          <img src={logo} alt="some" />
          DESIGNO
      </Link>
  )
}

export default Logo