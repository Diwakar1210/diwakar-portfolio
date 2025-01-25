import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className="logo">
          <a href="" className={styles.logo}>
            D
          </a>
        </div>
        <ul>
          <li>
            <a href="/">
              <span>01. Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <span>02. About</span>
            </a>
          </li>
          <li></li>
          <li>
            <a href="#experience">
              <span>03. Experience</span>
            </a>
          </li>
          <li>
            <a href="#project">
              <span>04. Projects</span>
            </a>
          </li>
          {/* <li>
            <a href="">
              <span>05. Contact</span>
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
