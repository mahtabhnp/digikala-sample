import React from "react";
import DigikalaLogo from "./DigikalaLogo";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import Popover from "../Popover";

export default function Header() {
  const classes = style;
  return (
    <header className={classes.header}>
      <div className={classes.card}>
        <Popover />
      </div>
      <div className={classes.logo}>
        <Link to="/">
          <DigikalaLogo />
        </Link>
      </div>
    </header>
  );
}
