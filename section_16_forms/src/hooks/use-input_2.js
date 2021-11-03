import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);

  const valueHasError = !enteredValueIsValid && enteredValueIsTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueBlurHandler = (e) => {
    setEnteredValueIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError: valueHasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
