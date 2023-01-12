import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Company from '../pages/company'
import Homepage from '../pages/homepage'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/our-company' element={<Company/>}/>
    </Routes>
  )
}

export default AppRoutes