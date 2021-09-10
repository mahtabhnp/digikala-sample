import { get } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { Price } from "../../utils/price";
import Rating from "../Rating";
import style from "./style.module.scss";
import PlusIcon from "./PlusIcon";
import { useDispatch } from "react-redux";
import { loadCard } from "../../redux/actions";

export default function Product({ data }) {
  const classes = style;
  const dispatch = useDispatch();

  return (
    <li>
      <div className={classes.productItem}>
        <div className={classes.card}>
          <Link to={`/product/${data.id}`} target="_blank">
            <div></div>
            <img
              src={get(data, "images.main")}
              alt="Denim Jeans"
              className={classes.image}
            />
          </Link>
          <div className={classes.titleWrapper}>
            <Link
              to={`/product/${data.id}`}
              target="_blank"
              className={classes.title}
            >
              {get(data, "title")}
            </Link>
          </div>
          <Rating
            count={get(data, "rating.count")}
            rate={get(data, "rating.rate")}
          />
          <div className={classes.priceWrapper}>
            <p className={classes.priceUnit}>تومان</p>
            <p className={classes.price}>
              {Price(get(data, "price.selling_price"))}
            </p>
            <button
              onClick={() => {
                dispatch(loadCard(data));
              }}
            >
              <PlusIcon />
            </button>
          </div>
          <p></p>
        </div>
      </div>
    </li>
  );
}
