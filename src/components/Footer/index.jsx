import React from "react";
import Icons from "./partials/Icons";
import styles from "./styles/Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.copyright}>© 2020</p>
      <Icons />
    </div>
  </footer>
);

export default Footer;
