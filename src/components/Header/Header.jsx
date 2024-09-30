import React from 'react'
import styles from "./Header.module.css"

import menuIcon from "../../assets/images/menuIcon.png"
import logo from "../../assets/images/logo.png"
import locationIcon from "../../assets/images/locationIcon.png"
import basketIcon from "../../assets/images/shoppingCart.png"
import countryFlag from "../../assets/images/usaFlag.jpg"
import arrowDown from "../../assets/images/arrowDown.png"
import userIcon from "../../assets/images/userIcon.png"
import { Link } from 'react-router-dom'


const Header = ({isSidebarOpen, setIsSidebarOpen}) => {
  const openSideBar = () => {
    setIsSidebarOpen(true)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>

        <div onClick={openSideBar} className={styles.header__menu}>
          <img src={menuIcon} alt="Menu Icon" />
        </div>

        <div className={styles.header__logo}>
          <Link to="/">
            <img src={logo} alt="Zuzu logo" />
          </Link>
        </div>

        <div className={`${styles.header__location} ${styles.header__item}`}>
          <img src={locationIcon} alt="location icon" />
          <p>Tashkent</p>
        </div>

      </div>
      <div className={styles.header__right}>

        <Link to="/cart">
          <div className={`${styles.header__basket} ${styles.header__item}`}>
            <img src={basketIcon} alt="Basket Icon" />
            <p>Basket</p>
          </div>
        </Link>

        <div className={`${styles.header__language} ${styles.header__item}`}>
          <img className={styles.header__language_img} src={countryFlag} alt="Country Flag" />
          <img src={arrowDown} alt="Arrow Down Icon" />
        </div>

        <div className={`${styles.header__account} ${styles.header__item}`}>
          <img src={userIcon} alt="User Account Icon" />
          <p className={styles.header__account_title}>Log in</p>
        </div>
        
      </div>
    </header>
  )
}

export default Header