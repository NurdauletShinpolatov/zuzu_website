import React from 'react'
import instagramLogo from '../../assets/images/instagramLogo.png'
import facebookLogo from '../../assets/images/facebookLogo.png'
import telegramLogo from '../../assets/images/telegramLogo.png'
import zuzuLogo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.upper}>
          <img src={zuzuLogo} alt="" />
          <div className={styles.navlinks}>
            <Link className={styles.black} to="/branches">Branches</Link>
            <Link className={styles.black} to="/about">About</Link>
            <Link className={styles.black} to="/contact">Contact</Link>
          </div>
          <div></div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bottom}>
          <p className={styles.txt__secodnary}>©Zuzu 2005 - 2021 All rights reserved</p>
          <div className={styles.social__media__links}>
            <img src={instagramLogo} alt="instagram logo" />
            <img src={facebookLogo} alt="facebook logo" />
            <img src={telegramLogo} alt="telegram logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer