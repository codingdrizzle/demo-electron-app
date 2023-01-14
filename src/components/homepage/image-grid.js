import React from 'react'
import { Row, Col } from 'antd'

import grid1 from '../../assets/grid-1.png'
import grid2 from '../../assets/grid-2.jpg'
import grid3 from '../../assets/grid-3.jpg'

const ImageGrid = () => {
    return (
        <Row gutter={[20,0]} >
            <Col span={12}>
                <img src={grid1} alt="grid image" style={{ width: '100%', height: 'auto'}} />
            </Col>
            <Col span={12}>
                <Row gutter={[0,20]}>
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