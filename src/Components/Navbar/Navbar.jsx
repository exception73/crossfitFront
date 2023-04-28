import React,{useState} from 'react'
import './Navbar.css'
import styles from "./Nav.module.css"
import { HashLink } from 'react-router-hash-link'
import { Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { logoutAction } from '../../redux/slices/userSlice'

const Navbar = () => {
  const [open,setstate] = useState(0);
  const dispatch = useDispatch()
  const {user}=useSelector((state)=>state.users.userAuth?.userInfo);
  console.log(user);
  const toggleBodyClass = () => {
    document.body.classList.toggle(styles.menuActive);
       (open === 0 )? setstate(1) : setstate(0);
    }

    const logoutonClick = () => {
      const my ="Hi"
      dispatch(logoutAction({my}));
    }
  return (
    // <div className='navbar'>
      
    //   <HashLink to='/#home'> <img className='crossfit-logo' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681382796/logo_xx6npu.png" alt="logo" /> </HashLink>
    //   <div className='shop-comm-bot' >
       
    //    {/* <BrowserRouter> */}
    //       <Link className='navbar-links' to='/shop'>FitMart</Link>
    //       <Link className='navbar-links' to='/community'>Community</Link>
    //       <Link className='navbar-links' to='/fitbot'>FitBot</Link>  
    //     {/* </BrowserRouter> */}
       
    //   </div>
    //   <Link to='/profile'><img className='user-logo' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681625760/user_ynk5rx.png" alt="" /></Link>
    // </div>
    <div>
    <nav className={styles.navbar}>
      <div className={styles.name}><Link to='/'> <img className='crossfit-logo' src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681382796/logo_xx6npu.png" alt="logo" /> </Link>
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
            <Link className={styles.navLink} to="/shop">FitMart</Link>
          </li>
          <li className={styles.menuItem}>
          <Link className={styles.navLink} to="/community">Community</Link>
          </li>
          <li className={styles.menuItem}>
          <Link className={styles.navLink} to="/fitbot"> FitBot</Link>
          </li>
          <li className={styles.menuItem}>
          <button onClick={logoutonClick}  >Logout</button>
          </li>
          <li className={styles.menuItem}>
          <Link className={styles.navLink} to="/profile"><button className={styles.cvdownbtn}><img className='user-logo' src={user?.avatar} alt="" /></button>
</Link>
          </li>

        </ul>
      </div>
    </nav>
  </div>
  )
}

export default Navbar