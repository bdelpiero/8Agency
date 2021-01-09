import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles.css";

const Root = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Main} />
    </BrowserRouter>
  );
};

export default ReactDOM.render(<Root />, document.getElementById("app"));
