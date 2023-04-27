import React from 'react'
import "./SocialNavbar.css"
import { Link } from 'react-router-dom'

const SocialNavbar = () => {
  return (
    <div className='socialNavbar-main'>
        <Link to='/'><img className='socialNavbar-main-img' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681547684/blacklogo_f7ufat.png" alt="crossfit"/></Link>
        <img  className="user-avatar-post" src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681625760/user_ynk5rx.png" alt="av" />
    </div>
  )
}

export default SocialNavbar