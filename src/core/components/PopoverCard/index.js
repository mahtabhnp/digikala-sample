import React from "react";
import { useSelector } from "react-redux";
import { get, uniqBy } from "lodash";
import style from "./style.module.scss";
import { getOccurrence } from "../../utils/getOccurrence";
import PopoverCardItem from "../PopoverCardItem";

export default function PopoverCard() {
  const { card } = useSelector(({ card }) => ({
    card,
  }));

  const classes = style;
  return (
    <div className={classes.cardListWrapper}>
      <ul>
        {get(card, "card", []).length > 0 ? (
          uniqBy(get(card, "card", []), (e) => e.id).map((item) => {
            const orderCount = getOccurrence(get(card, "card", []), item.id);
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
