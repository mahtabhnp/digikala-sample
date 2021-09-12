import React from "react";
import { useSelector } from "react-redux";
import { uniqBy } from "lodash";
import { getOccurrence } from "../../utils/getOccurrence";
import PopoverCardItem from "../PopoverCardItem";
import style from "./style.module.scss";

export default function PopoverCard() {
  const { card } = useSelector(({ cardReducer }) => ({
    card: cardReducer.card,
  }));

  const classes = style;
  return (
    <div className={classes.cardListWrapper}>
      <ul>
        {card.length > 0 ? (
          uniqBy(card, (e) => e.id).map((item) => {
            const orderCount = getOccurrence(card, item.id);
            return (
              <li>
                <PopoverCardItem data={{ ...item, orderCount }} />
              </li>
            );
          })
        ) : (
          <div>
            <p className={classes.noProduct}>هیچ محصولی در سبد خرید شما نیست</p>
          </div>
        )}
      </ul>
    </div>
  );
}
