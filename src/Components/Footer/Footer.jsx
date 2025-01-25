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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/diwakar-b-605b3a21b/" target="blank">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com/_iamdiwakar_/" target="_blank">Instagram</a>
            </li>
            <li>
              <a href="https://github.com/Diwakar1210" target="_blank">Github</a>
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
