import React from 'react'
import Layout from '../layout'
import { HomeJumbotron } from '../commons/jumbotron'
import ImageGrid from '../components/homepage/image-grid'

function HomePage() {
  return (
    <div>
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 150 }}>
          <HomeJumbotron />
          <ImageGrid />
        </div>
      </Layout>
    </div>
  )
}

export default HomePage
