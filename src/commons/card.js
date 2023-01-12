import React from 'react'

const Card = ({ imgSrc, footerTitle, footerText }) => {
  return (
    <div className='card'>
      <div className="card-img">
        <img src={imgSrc} alt="some image" />
      </div>
      <div className="card-footer">
        <h1 className="footer-title">{footerTitle}</h1>
        <p className="footer-text">{footerText}</p>
      </div>
    </div>
  )
}

export default Card