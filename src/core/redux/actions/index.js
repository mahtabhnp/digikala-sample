/* eslint-disable array-callback-return */

export const shoppingActionTypes = {
  LOAD_CARD: "LOAD_CARD",
};

export function loadCard(data) {
  return {
    type: shoppingActionTypes.LOAD_CARD,
    data,
  };
}
