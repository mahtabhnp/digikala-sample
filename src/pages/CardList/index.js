import React from "react";
import { useSelector } from "react-redux";
import { uniqBy } from "lodash";
import CardItem from "src/core/components/CardItem";
import style from "./style.module.scss";

export default function CardList() {
  const { card } = useSelector(({ cardReducer }) => ({
    card: cardReducer.card,
  }));
  const classes = style;
  return (
    <div className={classes.cardListWrapper}>
      <ul>
        {card.length > 0 ? (
          uniqBy(card, (e) => e.id).map((item) => {
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
