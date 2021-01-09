import React from "react";
import Description from "./partials/Description";
import RegisterForm from "./partials/RegisterForm";
import style from "./styles/index.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <Description />
      <RegisterForm />
    </div>
  );
};

export default Landing;
