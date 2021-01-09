import React from "react";
import styles from "./styles/Header.module.css";

const Header = () => (
  <header className={styles.mainHeader}>
    <div className={styles.badge}>WEBINAR</div>
    <div>
      <h1 className={styles.title}>
        El reto de humanizar el CX financiero en 2021
      </h1>
      <h1 className={styles.title}>
        <i>La experiencia de un Unicornio de Latam</i>
      </h1>

      <h3 className={styles.subtitle}>
        Miércoles 16 de diciembre | 17 hs (Horario de Quito)
      </h3>
    </div>
  </header>
);

export default Header;
