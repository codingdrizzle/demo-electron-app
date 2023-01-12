import React from 'react'
import './styles.css'

const Jumbotron = ({title, text}) => {
  return (
    <div className='jumbotron'>
      <h1 className='jumbotron-title'>{title}</h1>
      <p className='jumbotron-text'>{text}</p>
    </div>
  )
}

export default Jumbotron