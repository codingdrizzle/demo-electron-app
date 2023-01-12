import React from 'react'
import Layout from '../layout'
import Navbar from '../layout/navbar'
import Jumbotron from '../commons/jumbotron'
import Card from '../commons/card'
import { Row, Col } from 'antd'
import { cardata } from '../data/card-data'

const Homepage = () => {
  return (
    <Layout>
      <Row gutter={[0, 160]}>
        <Col span={24}>
          <Jumbotron title={'web design'} text='We build websites that serve as powerful marketing tools
        and bring memorable brand experiences.' />
        </Col>
        <Col span={24}>
          <Row gutter={[50, 40]} align='middle' justify={'center'}>
            {
              cardata.map((item) => {
                return (
                  <Col key={item.id} xs={24} md={8}>
                    <Card imgSrc={item.url} footerTitle={item.title} footerText={item.text}/>
                  </Col>
                )
              })
            }
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default Homepage