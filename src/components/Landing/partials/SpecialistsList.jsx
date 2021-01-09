import React from "react";
import picture from "../../../../assets/img-astudillo.png";
import style from "../styles/SpecialistsList.module.css";

const positions = [
  "Presidente",
  "Customer Service Senior Manager",
  "Customer Service Senior Consultant",
  "Gerente de Consultoría de Soluciones",
];

const SpecialistsList = () => (
  <ul className={style.listContainer}>
    {positions.map((position) => (
      <li key={position}>
        <img src={picture} alt='' className={style.img}></img>
        <div className={style.text}>
          <h4>José Perez</h4>
          <p>{position}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default SpecialistsList;
