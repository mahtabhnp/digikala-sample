import { shopingActionTypes } from "../actions";

export const initialState = {
  card: [],
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case shopingActionTypes.LOAD_CARD:
      return {
        ...state,
        card: [...state.card, action.data],
      };

    default:
      return state;
  }
}

export default reducers;
