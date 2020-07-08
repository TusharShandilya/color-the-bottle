import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.scss";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let theme = localStorage.getItem('colorBottleTheme');

    if(theme === 'dark') {
      setTheme("dark")
      document.getElementsByTagName('html')[0].setAttribute('theme', 'dark')
    }
    
  }, [])

  const toggleTheme = () => {
    if(theme==='light') {
      localStorage.setItem("colorBottleTheme", "dark")
      document.getElementsByTagName('html')[0].setAttribute('theme', 'dark')
      setTheme("dark")
    } else {
      localStorage.setItem("colorBottleTheme", "light")
      document.getElementsByTagName('html')[0].setAttribute('theme', 'light')
      setTheme("light")
    }
    
    // window.location.reload()
  }

  return (
    <nav>
      <span className={styles.logo}> <img src={logo} alt=""/> Color The Bottle</span>
      <span onClick={toggleTheme} className={theme === "light" ? styles.icon : styles.iconDark}>
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />{" "}
        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
      </span>
    </nav>
  );
};

export default Navbar;
