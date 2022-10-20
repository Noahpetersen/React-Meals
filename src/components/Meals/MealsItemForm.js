import React, { useRef, useState } from "react";
import classes from "./MealsItemForm.module.css";
import Input from "../UI/Input";

const MealsItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
        setAmountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNumber)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        id="amount"
        type="number"
        label="Amount"
        defaultvalue='1'
      />
      <button type="submit">+Add</button>
      {!amountIsValid && <p>Please enter Valid amount</p>}
    </form>
  );
};

export default MealsItemForm;
