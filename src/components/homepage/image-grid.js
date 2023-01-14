import React from 'react'
import { Row, Col } from 'antd'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import './styles.css'

import grid1 from '../../assets/grid-1.png'
import grid2 from '../../assets/grid-2.jpg'
import grid3 from '../../assets/grid-3.jpg'

export const GridBox = ({ url, title, text }) => {
    return (
        <div className='grid-box'>
            <img src={url} alt="grid image" style={{ width: '100%', height: 'auto' }} />
            <div className="overlay">
                <h1 className='title'>{title}</h1>
                <p className='text'><span>{text}</span> <span><MdOutlineKeyboardArrowRight size={20} color={'#E7816B'} /></span></p>
            </div>
        </div>
    );
}

const ImageGrid = () => {
    return (
        <Row gutter={[20, 0]} >
            <Col span={12}>
                <GridBox url={grid1} title={'Web Design'} text={'view projects'} />
            </Col>
            <Col span={12}>
                <Row gutter={[0, 20]}>
                    <Col span={24}>
                        <img src={grid2} alt="grid image" style={{ width: '100%', height: 'auto' }} />
                    </Col>
                    <Col span={24}>
                        <img src={grid3} alt="grid image" style={{ width: '100%', height: 'auto' }} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ImageGrid