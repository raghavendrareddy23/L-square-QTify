import React from 'react';
import { ReactComponent as SearchIcon } from '../../Assets/Search icon.svg';
import styles from './SearchBar.module.css';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBar = ({ placeholder, options, searchQuery, handleSearchQueary}) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      // sx={{ width: 300 }}
      renderInput={(params) => (
        <form className={styles.wrapper}>
          <input
            className={styles.search}
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleSearchQueary} // Update searchQuery
            {...params}
          />
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </form>
      )}
    />
  );
};

export default SearchBar;
