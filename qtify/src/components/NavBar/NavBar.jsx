import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/logo'
import SearchBar from '../SearchBar/SearchBar'
import styles from './NavBar.module.css'

const navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <SearchBar />
        <Button children ="Give Feedback"/>
    </nav>
  )
}

export default navbar