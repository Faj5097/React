import { useState } from "react";
import classes from "../components/Cart/SimpleInput.module.css";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);

  const valueHasError = !valueIsValid && enteredValueIsTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setEnteredValueIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueIsTouched(false);
  };

  const style = valueHasError
    ? classes["form-control invalid"]
    : classes["form-control"];

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: valueHasError,
    style,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
