import React from 'react'
import './BeforeLoginLandingPage.css'
import { Link } from 'react-router-dom'

const BeforeLoginLandingPage = () => {
  return (
    <div  className='before-login-landing-page'>
        <img className='before-login-landing-page-crossfit-img' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681382796/logo_xx6npu.png" alt="crossfit" />
      <div className='before-login-landing-page-btn-div'>
            <Link className='before-login-landing-page-signup' to='/signup'>Sign Up</Link>
            <Link className='before-login-landing-page-signin' to='/signin'>Sign In</Link>
        </div>
    </div>
  )
}

export default BeforeLoginLandingPage
