import React from 'react'
import styles from './Navbar.module.css'
import './navbar.css'
function Navbar() {
  return (
    <div>
     <div className={styles.navbar}>
        <h1>Start Bootstrap</h1>
        <ul className={styles.unorederdlist}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar