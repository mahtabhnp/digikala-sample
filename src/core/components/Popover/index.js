import { get } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import BasketShopIcon from "./BasketShopIcon";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import PopoverCard from "../PopoverCard";

export default function Popover() {
  const classes = style;
  const { card } = useSelector(({ card }) => ({
    card,
  }));
  return (
    <>
      <div className={classes.popoverWrapper}>
        <Link to="/card">
          <BasketShopIcon />
          {get(card, "card", []).length !== 0 && (
            <span>{[...new Set(get(card, "card", []))].length}</span>
          )}
        </Link>
        <div className={classes.popoverContent}>
          <PopoverCard />
        </div>
      </div>
    </>
  );
}
