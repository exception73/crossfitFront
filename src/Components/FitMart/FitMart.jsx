import React from 'react'
import './FitMart.css'
import FitmartNavbar from './FitMartNavbar/FitmartNavbar'
import FitMartCaresol from './FitMartCaresol/FitMartCaresol'
import Mens from './Mens/Mens'
import Footer from '../Footer/Footer'

const FitMart = () => {
  return (
    <div>
        <FitmartNavbar />
        <FitMartCaresol />
        <Mens />
        <Mens />
        <Mens />    
        <Footer />
        
    </div>
  )
}

export default FitMart