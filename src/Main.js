import React from "react";
import { hot } from "react-hot-loader/root";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import "bootstrap/dist/css/bootstrap.min.css";

// Uses Switch and Route in case new routes are required
const Main = () => (
  <>
    <Header />
    <Switch>
      <Route path='/' component={Landing} />
    </Switch>
    <Footer />
  </>
);

export default hot(Main);
