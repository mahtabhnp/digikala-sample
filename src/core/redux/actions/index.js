/* eslint-disable array-callback-return */

export const shoppingActionTypes = {
  LOAD_CARD: "LOAD_CARD",
  DELETE_PRODUCT: "DELETE_PRODUCT",
};

export function loadCard(data) {
  return {
    type: shoppingActionTypes.LOAD_CARD,
    data,
  };
}
export function deleteProduct(id) {
  return {
    type: shoppingActionTypes.DELETE_PRODUCT,
    id,
  };
}
