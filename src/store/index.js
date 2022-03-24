import { createStore } from "redux";

const initialState = { counter: 0, isLogin: false, data: [] };

const reducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "Login") {
    return {
      ...state,
      isLogin: true,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
