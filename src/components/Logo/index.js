import React from 'react'
import styles from './Logo.module.css'
import logo from '../assets/THREESIXTY.png'

const Logo = () => (
  <div className={styles.Logo}>
    <img src={logo} alt="360 Logo" />
  </div>
)

export default Logo
