import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.Main}>
        <Link
            to="/"
            className={styles.link}>
            -whatever-
        </Link>
    </div>
  )
}

export default Navbar