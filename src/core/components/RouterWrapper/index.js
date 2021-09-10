import React, { Fragment } from "react";
import style from "./style.module.scss";
import Header from "../Header";

export default function Rating({ children }) {
  const classes = style;

  return (
    <Fragment>
      <Header />
      <section className={classes.container}>{children}</section>
    </Fragment>
  );
}
