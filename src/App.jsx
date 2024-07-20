import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './index.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import PolicyData from './pages/PolicyData/PolicyData'
import Discard from './pages/Discard/Discard'
import Home from './pages/Home/Home'
import ScrollToTop from './helpers/ScrollToTop'

 function App() {  

  return (
    <>
      <Router>
        <ScrollToTop/>
        <Header/>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/policy' element={<PolicyData />} />
            <Route path='/discard' element={<Discard />} />
          </Routes>
        <Footer/>
      </Router>
    </>
  
  )
}

export default App

