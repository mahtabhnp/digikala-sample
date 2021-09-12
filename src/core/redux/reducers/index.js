import { shoppingActionTypes } from "../actions";

export const initialState = {
  card: [],
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case shoppingActionTypes.LOAD_CARD:
      return {
        ...state,
        card: [...state.card, action.data],
      };
    case shoppingActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        card: state.card.filter((item) => item.id !== action.id),
      };

    default:
      return state;
  }
}

export default reducers;
