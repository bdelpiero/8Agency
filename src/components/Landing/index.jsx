import React from "react";
import Description from "./partials/Description";
import Form from "./partials/Form";
import style from "./styles/index.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <Description />
      <Form />
    </div>
  );
};

export default Landing;
