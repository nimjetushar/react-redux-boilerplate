import * as actionTypes from "../actions/actionTypes";
import inititalState from "./inititalState";

const productReducer = (state = inititalState.products, action) => {
  let itemIndex;
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS_SUCCESS:
      return action.payload;
    case actionTypes.INSERT_PRODUCT_SUCCESS:
      return [...state, Object.assign({}, action.payload)];
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      itemIndex = state.findIndex(p => p.id == action.payload.id);
      state.splice(itemIndex, 1, Object.assign({}, action.payload));
      return [...state];
    default:
      return state;
  }
};

export default productReducer;
