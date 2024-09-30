import { Drawer } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Sidebar.module.css"
import locationIcon from "../../assets/images/locationIcon.png"
import basketIcon from "../../assets/images/shoppingCart.png"
import countryFlag from "../../assets/images/usaFlag.jpg"
import arrowDown from "../../assets/images/arrowDown.png"

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {
    
  return (
    <Drawer anchor='left' open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <div className={styles.navlinks}>
            <Link onClick={() => setIsSidebarOpen(false)} className={styles.black} to="/">Home</Link>
            
            <div className={`${styles.header__location} ${styles.black}`}>
              <img src={locationIcon} alt="location icon" />
              <p>Tashkent</p>
            </div>

            <Link to="/cart">
              <div className={`${styles.header__basket} ${styles.black}`}>
                <img src={basketIcon} alt="Basket Icon" />
                <p>Basket</p>
              </div>
            </Link>

            <div className={`${styles.header__language} ${styles.black}`}>
              <img className={styles.header__language_img} src={countryFlag} alt="Country Flag" />
              <img src={arrowDown} alt="Arrow Down Icon" />
            </div>

            <Link onClick={() => setIsSidebarOpen(false)} className={styles.black} to="/branches">Branches</Link>
            <Link onClick={() => setIsSidebarOpen(false)} className={styles.black} to="/about">About</Link>
            <Link onClick={() => setIsSidebarOpen(false)} className={styles.black} to="/contact">Contact</Link>
        </div>
    </Drawer>
  )
}

export default Sidebar