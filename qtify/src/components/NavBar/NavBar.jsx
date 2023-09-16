import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueary = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar searchQuery={searchQuery} handleSearchQueary={handleSearchQueary} />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default NavBar;
