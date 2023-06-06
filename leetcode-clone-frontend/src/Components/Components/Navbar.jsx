import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`${styles.navbar} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <h1>Leetcode Clone</h1>
      <button onClick={toggleTheme}>
        Toggle Theme ({theme === "dark" ? "Light" : "Dark"})
      </button>
    </nav>
  );
}

export default Navbar;
