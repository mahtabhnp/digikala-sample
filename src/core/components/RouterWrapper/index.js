import React from "react";
import style from "./style.module.scss";
import Header from "../Header";

const RouterWrapper = ({ children }) => {
  const classes = style;

  return (
    <>
      <Header />
      <section className={classes.container}>{children}</section>

      {/* <footer>
        <p>Footer</p>
      </footer> */}
    </>
  );
};
export default RouterWrapper;
