import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const BgCard = ({ title, text, url }) => {
    return (
        // <div className='bg-card' style={{backgroundImage: `url('${url}')`}}>
        <div className='bg-card'>
            <img src={url} alt="card-image" />
            <div className="overlay-text">
                <h1>{title}</h1>
                <p style={{ display: 'flex', justifyContent: 'center', gap: 20 }}><span>{text}</span><span><MdOutlineKeyboardArrowRight size={20} color={'#E7816B'}/></span></p>
            </div>
        </div>
    )
}

export default BgCard