import { get } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import PriceConvertor from "../PriceConvertor";
import Rating from "../Rating";
import PlusIcon from "./PlusIcon";
import { useDispatch } from "react-redux";
import { loadCard } from "src/core/redux/actions";
import style from "./style.module.scss";

export default function Product({ data }) {
  const classes = style;
  const dispatch = useDispatch();

  return (
    <li>
      <div className={classes.productItem}>
        <div className={classes.card}>
          <Link to={`/product/${data.id}`}>
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
            <button
              onClick={() => {
                dispatch(loadCard(data));
              }}
            >
              <PlusIcon />
            </button>
            <PriceConvertor value={get(data, "price.selling_price", 0)} />
          </div>
        </div>
      </div>
    </li>
  );
}
