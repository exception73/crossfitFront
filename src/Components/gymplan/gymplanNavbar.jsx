import React from 'react'
import './gymplan.css'
import { HashLink } from 'react-router-hash-link'
import { Link} from 'react-router-dom'
import './gymplanNavbar.css'

const GymplanNavbar = () => {
  return (
    <div className='gymplan-navbar'>
      
      <HashLink to='/#home'> <img className='crossfit-logo' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681382796/logo_xx6npu.png" alt="logo" /> </HashLink>
      <div className='shop-comm-bot' >
       
       {/* <BrowserRouter> */}
          <Link className='navbar-links' to='/shop'>FitMart</Link>
          <Link className='navbar-links' to='/community'>Community</Link>
          <Link className='navbar-links' to='/fitbot'>FitBot</Link>  
        {/* </BrowserRouter> */}
       
      </div>
      <Link to='/profile'><img className='user-logo' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681625760/user_ynk5rx.png" alt="" /></Link>
    </div>
  )
}

export default GymplanNavbar