import React from 'react'
import { ReactComponent as SearchIcon } from '../../Assets/Search icon.svg';
import styles from './SearchBar.module.css'

const SearchBar = ({placeholder}) => {
  return (
    
    <form className= {styles.wrapper}>
        <input className={styles.search} placeholder={placeholder}  />
        <button className={styles.searchButton} type='submit'>
            <SearchIcon />
        </button>
    </form>
  )
}

export default SearchBar