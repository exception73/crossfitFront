import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
     <div className='home' id='home'>
        <div className="left">
          
          <p className='tagline'>Transform your body!</p>

            <div>
            <Link to='/dietplan' className='diet-plan-btn'>Diet Plan</Link>
            <Link to='/gymplan' className='gym-plan-btn'>Gym Plan</Link>
            </div>
           
        </div>
        <div className="right">
            <img src="https://res.cloudinary.com/dycitvrpg/image/upload/v1682093924/WhatsApp_Image_2023-04-18_at_09.35.02-removebg_eti97y.png" alt="trainer" />
        </div>

       
        
    </div>
   

  
  )
}

export default LandingPage