import React from "react";
import SpecialistsList from "./SpecialistsList";
import logos from "../../../../../assets/Group 5.jpg";
import layout from "../../styles/index.module.css";
import styles from "../../styles/Description.module.css";

const Description = () => (
  <div className={layout.description}>
    <img src={logos} alt='' className={styles.logos} />
    <p className={styles.text}>
      Te invitan este webinar, donde trataremos la temática de cómo humanizar la
      experiencia del cliente de Banca y Seguros en el nuevo entorno digital.
      <br />
      <br />
      Además podremos conocer las estrategias que aplicó LOREM para generar una
      experiencia memorable para sus clientes, mientras se convertía en el gran
      Unicornio de LATAM.
      <br />
      <br />
      Escucha de primera mano la voz de nuestros especialistas:
    </p>
    <SpecialistsList />
    <p className={styles.text}>
      Participa e inspírate para innovar y mejorar la interacción entre clientes
      y marcas con historias de éxito de empresas del ámbito financiero en
      América Latina.
      <br />
      <br />
      ¡Te esperamos!
      <br />
      <br />
    </p>
    <img src={logos} alt='' className={styles.logos} />
  </div>
);

export default Description;
