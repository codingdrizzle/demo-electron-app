import React from 'react'
import './styles.css'
import imgSrc from '../assets/phone.png'



export const Jumbotron = ({title, text}) => {
  return (
    <div className='jumbotron'>
      <h1 className='jumbotron-title'>{title}</h1>
      <p className='jumbotron-text'>{text}</p>
    </div>
  )
}

export const HomeJumbotron = ({title, text}) => {
  return (
    <div className="home-jumb">
      <h1>Award-winning custom designs and digital branding solutionsAward-winning custom designs and digital branding solutions</h1>
      <img src={imgSrc} alt="ready" />
    </div>
  );
}