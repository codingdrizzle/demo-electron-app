import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Company from '../pages/company'
import HomePage from '../pages/home'
import WebPage from '../pages/web'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/web-page' element={<WebPage/>}/>
        <Route path='/our-company' element={<Company/>}/>
    </Routes>
  )
}

export default AppRoutes