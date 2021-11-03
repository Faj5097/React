import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import useInput from "../../hooks/use-input";
import classes from "./SimpleInput.module.css";

const SimpleInput = (props) => {
  const cartCtx = useContext(CartContext);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    style: nameStyle,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    style: emailStyle,
    valueChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const orderMeals = async () => {
    try {
      const response = await fetch(
        "https://http-handle-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify({ name: enteredName, email: enteredEmail }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    } catch (error) {}
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    orderMeals();
    cartCtx.clearItems();
    props.onHideCart();

    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameStyle}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className={classes["error-text"]}>Name must not be empty.</p>
        )}
      </div>
      <div className={emailStyle}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className={classes["error-text"]}>Email is not valid.</p>
        )}
      </div>

      <div className={classes["form-actions"]}>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
