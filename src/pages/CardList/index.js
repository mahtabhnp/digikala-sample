import React from "react";
import { useSelector } from "react-redux";
import { get, uniqBy } from "lodash";
import CardItem from "../../core/components/CardItem";
import style from "./style.module.scss";

export default function CardList() {
  const { card } = useSelector(({ card }) => ({
    card,
  }));
  const classes = style;
  return (
    <div className={classes.cardListWrapper}>
      <ul>
        {get(card, "card", []).length > 0 ? (
          uniqBy(get(card, "card", []), (e) => e.id).map((item) => {
            return (
              <li>
                <CardItem data={{ ...item }} />
              </li>
            );
          })
        ) : (
          <p className={classes.noProduct}>هیچ محصولی در سبد خرید شما نیست</p>
        )}
      </ul>
    </div>
  );
}
