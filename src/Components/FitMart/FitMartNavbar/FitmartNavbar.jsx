import React , {useState} from 'react'
import './FitmartNavbar.css'
import { Link } from 'react-router-dom'
import styles from "./Nav.module.css"

const FitmartNavbar = () => {
  const [open,setstate] = useState(0);
  const toggleBodyClass = () => {
    document.body.classList.toggle(styles.menuActive);
       (open === 0 )? setstate(1) : setstate(0);
    }

  return (
    // <div className='fit-mart-navbar'>
    //   <div className='fit-mart-nav-first'>
    //     <Link className='fit-mart-nav-crossfit-logo' to='/'><img src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681547684/blacklogo_f7ufat.png" alt="logo" /></Link>
    //   </div>

    //   <div className='fit-mart-nav-second'>
    //     <Link  className='fit-mart-nav-second-link'>Men</Link>
    //     <Link  className='fit-mart-nav-second-link'>Women</Link>
    //     <Link  className='fit-mart-nav-second-link'>Supplements</Link>
    //   </div>

    //   <div className='fit-mart-nav-third'>
    //     <Link className='fit-mart-nav-user-logo' to='/profile'><img src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681625760/user_ynk5rx.png" alt="" /></Link>
    //   </div>
    // </div>
<div>
      <nav className={styles.navbar}>
        <div className={styles.name}>
             <Link to='/'><img className={styles.image} src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681547684/blacklogo_f7ufat.png" alt="logo" /></Link>
        </div>
        <div className={styles.pushLeft}>
          <button id="menu-toggler" data-class={styles.menuActive} className={styles.hamburger} onClick={toggleBodyClass}>
            {
                open === 0 ?
                <i className="fa-solid fa-bars"></i>
                :
                <i className="fa-solid fa-xmark"></i>
            }
          </button>
          <ul id="primary-menu" className={`${styles.menu} ${styles.navMenu}`}>
            <li className={styles.menuItem}>
              <a className={styles.navLink} href="#home">Men</a>
            </li>
            <li className={styles.menuItem}>
            <a className={styles.navLink} href="#projects">Women</a>
            </li>
            <li className={styles.menuItem}>
            <a className={styles.navLink} href="#about">Supplements</a>
            </li>
            <li className={styles.menuItem}>
            <a  className='fit-mart-nav-user-logo' href='/profile'><img src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681625760/user_ynk5rx.png" alt="" /></a>
            </li>

          </ul>
        </div>
      </nav>
    </div>

  )
}



export default FitmartNavbar