import React from "react";
import { get } from "lodash";
import style from "./style.module.scss";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import { Price } from "../../utils/price";
import StoreIcon from "./StoreIcon";

const CardItem = ({ data }) => {
  const classes = style;

  return (
    <>
      <div className={classes.itemWapper}>
        <div className={classes.itemImage}>
          <Link to={`/product/${data.id}`}>
            <img src={get(data, "images.main")} alt="product"></img>
          </Link>
        </div>
        <div className={classes.itemInfo}>
          <div className={classes.itemTitle}>{data.title}</div>
          {get(data, "status") === "marketable" && (
            <div className={classes.marketable}>
              <StoreIcon />
              <p>موجود در انبار فروشنده </p>
            </div>
          )}
          <div className={classes.orderCount}>
            <p>آیتم های انتخاب شده</p>
            <p>{get(data, "orderCount")}</p>
          </div>
          <div className={classes.itemTitle}>
            <Rating
              rate={get(data, "rating.rate")}
              count={get(data, "rating.count")}
            />
          </div>
          <div className={classes.priceWrapper}>
            <p className={classes.price}>
              {Price(get(data, "price.selling_price"))}
            </p>
            <p className={classes.priceUnit}>تومان</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardItem;