import React from "react";
import { get } from "lodash";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export default function PopoverCardItem({ data }) {
  const classes = style;

  return (
    <div className={classes.itemWrapper}>
      <div className={classes.itemImage}>
        <Link to={`/product/${data.id}`}>
          <img src={get(data, "images.main")} alt="product"></img>
        </Link>
      </div>
      <div className={classes.itemInfo}>
        <div className={classes.itemTitle}>{data.title}</div>
      </div>
    </div>
  );
}
