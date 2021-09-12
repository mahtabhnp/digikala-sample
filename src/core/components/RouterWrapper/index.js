import React, { Fragment } from "react";
import Header from "../Header";
import style from "./style.module.scss";

export default function Rating({ children }) {
  const classes = style;

  return (
    <Fragment>
      <Header />
      <section className={classes.container}>{children}</section>
    </Fragment>
  );
}
