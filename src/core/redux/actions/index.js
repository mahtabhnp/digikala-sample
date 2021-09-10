/* eslint-disable array-callback-return */

export const shopingActionTypes = {
  LOAD_CARD: "LOAD_CARD",
};

export function loadCard(data) {
  return {
    type: shopingActionTypes.LOAD_CARD,
    data,
  };
}
