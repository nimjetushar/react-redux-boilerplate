import * as actionTypes from "../actions/actionTypes";
import inititalState from "./inititalState";

const counterReducer = (state = inititalState.count, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return state + action.payload;
    case actionTypes.DECREMENT_COUNTER:
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
