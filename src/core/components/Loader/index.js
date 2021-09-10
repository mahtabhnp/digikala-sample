import React from "react";
import style from "./style.module.scss";

const Loader = () => {
  const classes = style;
  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loader;
