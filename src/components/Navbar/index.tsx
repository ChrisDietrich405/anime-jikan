import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

import naruto from "./naruto.png";

const Navbar = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_inner_container}>
        <img src={naruto} alt="naruto-logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/character">Character</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
