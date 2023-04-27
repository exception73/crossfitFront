import React,{useState} from 'react'
import './Navbar.css'
import styles from "./Nav.module.css"
import { Link} from 'react-router-dom'

const FitmartNavbar = () => {
  const [open,setstate] = useState(0);
  const toggleBodyClass = () => {
    document.body.classList.toggle(styles.menuActive);
       (open === 0 )? setstate(1) : setstate(0);
    }
  return (
    <div>
    <nav className={styles.navbar}>
      <div className={styles.name}> 
             <Link className='fit-mart-nav-crossfit-logo' to='/'><img src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681547684/blacklogo_f7ufat.png" alt="logo" /></Link>
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
            <Link className={styles.navLink} to="/shop">Men</Link>
          </li>
          <li className={styles.menuItem}>
          <Link className={styles.navLink} to="/community">Women</Link>
          </li>
          <li className={styles.menuItem}>
          <Link className={styles.navLink} to="/fitbot"> Supplements</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to='/profile'><img className={styles.userLogo} src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681625760/user_ynk5rx.png" alt="" /></Link>
          </li>

        </ul>
      </div>
    </nav>
  </div>
  )
}

export default FitmartNavbar;