import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./Authentication.module.css";

const Authentication = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [isValid, setIsvalid] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  //   const isLogin = useSelector((state) => state.isLogin);
  const onChangeHandler = () => {
    setValue({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };
  const loginHandler = (event) => {
    event.preventDefault();
    if (!value.email || !value.password) {
      setIsvalid(false);
      return;
    }
    dispatch({ type: "Login" });
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onChange={onChangeHandler}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} value={value.email} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          value={value.password}
        />
        <button type="submit" onClick={loginHandler}>
          Login
        </button>
        {!isValid && <p>Please provide all details!</p>}
      </form>
    </div>
  );
};

export default Authentication;
