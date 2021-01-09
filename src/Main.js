import React from "react";
import { hot } from "react-hot-loader/root";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  return (
    <>
      <Header />
      {/* <Switch>
        <Route exact path='/' component={Landing} />
      </Switch> */}
      {/* <Footer/> */}
    </>
  );
};

export default hot(Main);
