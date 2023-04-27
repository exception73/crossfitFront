import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <div className='footer-full-class'>
        <div className='footer-first-section'>
           <Link to='/'> <img className='first-section-img' src='https://res.cloudinary.com/dycitvrpg/image/upload/v1681547684/blacklogo_f7ufat.png' alt="logo" /></Link>
            <p className='first-section-para'>Transform your Body!</p>
        </div>
        <div className='footer-second-section'>
            <h2 className='second-section'>MENU</h2>
           
                <HashLink className='second-section-link' to='/#home'>Home</HashLink>
                <Link className='second-section-link' to='/shop'>FitMart</Link>
                <Link className='second-section-link' to='/dietplan'>dietplan</Link>
                <Link className='second-section-link' to='/gymplan'>Gym plan</Link>
                <Link className='second-section-link' to='/community'>Community</Link>
                <Link className='second-section-link' to='/fitbot'>Fitbot</Link>
           
        </div>
        <div className='footer-third-section'></div>
        <div className='footer-fourth-section'>
            <p className='fourth-section-para'>Get in touch:</p>
          
                <Link className='fourth-section-gmail' to='mailto:cust.cross.fit@gmail.com'>cust.cross.fit@gmail.com</Link>
      
        </div>
    </div>
  )
}

export default Footer