import React from "react";
import { Price } from "../../utils/price";
import style from "./style.module.scss";

export default function PriceConvertor({ value }) {
  const classes = style;

  return (
    <div className={classes.priceWrapper}>
      <p className={classes.price}>{Price(value)}</p>
      <p className={classes.priceUnit}>تومان</p>
    </div>
  );
}
