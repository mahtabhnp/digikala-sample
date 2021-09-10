import React from "react";
import { get } from "lodash";
import { useSelector } from "react-redux";
import BasketShopIcon from "./BasketShopIcon";
import DigikalaLogo from "./DigikalaLogo";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = style;

  const { card } = useSelector(({ card }) => ({
    card,
  }));
  return (
    <>
      <header className={classes.header}>
        <div className={classes.card}>
          <Link to="/card">
            <BasketShopIcon />
            {get(card, "card", []).length !== 0 && (
              <span>{[...new Set(get(card, "card", []))].length}</span>
            )}
          </Link>
        </div>
        <div className={classes.logo}>
          <Link to="/">
            <DigikalaLogo />
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
