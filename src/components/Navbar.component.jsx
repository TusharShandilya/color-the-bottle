import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.scss";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  return (
    <nav>
      <span className={styles.logo}> <img src={logo} alt=""/> Color The Bottle</span>
      <span className={theme === "light" ? styles.icon : styles.iconDark}>
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />{" "}
        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
      </span>
    </nav>
  );
};

export default Navbar;
