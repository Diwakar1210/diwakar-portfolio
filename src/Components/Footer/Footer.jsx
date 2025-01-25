import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_Content}>
        <div className={styles.footer_Logo}>
          <h3>Diwakar 😊</h3>
          <p>UI Developer Based in TamilNadu,Chennai</p>
        </div>
        <div className={styles.footer_Navigation}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_Copyright}>
        <p>Copyrights © {new Date().getFullYear()} | designed & developed by Diwakar</p>
      </div>
    </footer>
  );
};

export default Footer;
