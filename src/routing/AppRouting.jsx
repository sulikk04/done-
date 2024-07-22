import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { PolicyData } from '../pages/PolicyData'
import { Discard } from '../pages/Discard'

export const AppRouting = () => {
  return (
    <Routes>
        {/* main page */}
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/' element={<Home />} />

        {/* header part */}

        {/* footer part */}
        <Route path='/test' element={<PolicyData />} />
        <Route path='/policy' element={<PolicyData />} />
        <Route path='/discard' element={<Discard />} />
    </Routes>
  )
}

