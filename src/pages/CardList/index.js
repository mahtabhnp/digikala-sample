import React from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";
import CardItem from "../../core/components/CardItem";
import style from "./style.module.scss";
import { getOccurrence } from "../../core/utils/getOccurrence";

const CardList = () => {
  const { card } = useSelector(({ card }) => ({
    card,
  }));
  const classes = style;
  return (
    <div className={classes.cardListWrapper}>
      <ul>
        {get(card, "card", []).length > 0 ? (
          [...new Set(get(card, "card", []))].map((item) => {
            const orderCount = getOccurrence(get(card, "card", []), item.id);
            return (
              <li>
                <CardItem data={{ ...item, orderCount }} />
              </li>
            );
          })
        ) : (
          <p className={classes.noProduct}>هیچ محصولی در سبد خرید شما نیست</p>
        )}
      </ul>
    </div>
  );
};

export default CardList;
