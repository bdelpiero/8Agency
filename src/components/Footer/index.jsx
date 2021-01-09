import React from "react";
import Icons from "./partials/Icons";
import style from "./styles/Footer.module.css";

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.container}>
      <p className={style.copyright}>© 2020</p>
      <Icons />
    </div>
  </footer>
);

export default Footer;
