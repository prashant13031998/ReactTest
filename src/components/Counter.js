import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increamentHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  return (
    <div className={classes.counter}>
      <div className={classes.counter_field}>{counter}</div>
      <div className={classes.counter_btn}>
        <button onClick={increaseHandler}>Increaseby5</button>
        <button onClick={increamentHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
    </div>
  );
};

export default Counter;
