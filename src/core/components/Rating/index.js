import React from "react";
import style from "./style.module.scss";
import StarIcon from "./StarIcon";

const Rating = ({ rate, count }) => {
  const classes = style;
  return (
    <div className={classes.score}>
      <StarIcon />
      <span className={classes.scoreNumber}>{(rate / 20).toFixed(1)}</span>
      <span className={classes.total}>({count})</span>
    </div>
  );
};
export default Rating;
