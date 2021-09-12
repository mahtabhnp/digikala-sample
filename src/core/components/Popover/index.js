import React from "react";
import { uniqBy } from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BasketShopIcon from "./BasketShopIcon";
import style from "./style.module.scss";
import PopoverCard from "../PopoverCard";

export default function Popover() {
  const classes = style;
  const { card } = useSelector(({ cardReducer }) => ({
    card: cardReducer.card,
  }));

  return (
    <div className={classes.popoverWrapper}>
      <Link to="/card">
        <BasketShopIcon />
        {card.length !== 0 && <span>{uniqBy(card, (e) => e.id).length}</span>}
      </Link>
      <div className={classes.popoverContent}>
        <PopoverCard />
      </div>
    </div>
  );
}
