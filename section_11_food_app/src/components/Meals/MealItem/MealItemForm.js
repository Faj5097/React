import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);

  const amountInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setFormIsValid(false);
      return;
    }

    setFormIsValid(true);
    props.onAddHandler(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
          step: 1,
        }}
      />
      <button>+ Add</button>
      {!formIsValid && <p>Please enter a correct amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
