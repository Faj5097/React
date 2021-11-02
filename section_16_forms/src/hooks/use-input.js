import { useState } from "react";

const useInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  return {
    value: enteredName,
    isTouched: enteredNameTouched,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    changeHandler: nameInputChangeHandler,
    blurHandler: nameInputBlurHandler
  };
};

export default useInput;
