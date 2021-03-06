import React from "react";
import { get } from "lodash";
import { useSelector } from "react-redux";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import StoreIcon from "./StoreIcon";
import PriceConvertor from "../PriceConvertor";
import { getOccurrence } from "../../utils/getOccurrence";
import { useDispatch } from "react-redux";
import { deleteProduct } from "src/core/redux/actions";
import DeleteIcon from "./DeleteIcon";
import style from "./style.module.scss";

export default function CardItem({ data }) {
  const { card } = useSelector(({ cardReducer }) => ({
    card: cardReducer.card,
  }));
  const dispatch = useDispatch();
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
        {get(data, "status") === "marketable" && (
          <div className={classes.marketable}>
            <StoreIcon />
            <p>موجود در انبار فروشنده </p>
          </div>
        )}
        <div className={classes.orderCount}>
          <button onClick={() => dispatch(deleteProduct(data.id))}>
            <DeleteIcon />
          </button>
          <p>عدد</p>
          <p className={classes.count}>{getOccurrence(card, data.id)}</p>
        </div>
        <div className={classes.itemTitle}>
          <Rating
            rate={get(data, "rating.rate")}
            count={get(data, "rating.count")}
          />
        </div>

        <div className={classes.priceWrapper}>
          <PriceConvertor value={get(data, "price.selling_price", 0)} />
        </div>
      </div>
    </div>
  );
}
