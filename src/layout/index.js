import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import './styles.css'

const Layout = ({ children }) => {
  return (
    <>
      <div className='layout'>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout