import { useState, useRef } from "react";
import Input from "../../UI/Input";
import CartIcon from "./CartIcon";
import IconPlus from "../../../assets/images/icon-plus.svg";
import IconMin from "../../../assets/images/icon-minus.svg";
import classes from "./SneakersItemForm.module.css";

const SneakersItemForm = (props) => {
  const [amountIsValid, setAmoutIsValid] = useState(true);
  const [amountInput, setAmountInput] = useState(0);
  const amountInputRef = useRef();

  const decrementHandler = () => {
    setAmountInput(amountInput - 1);
  };

  const incrementHandler = () => {
    setAmountInput(amountInput + 1);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredNumberAmount = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredNumberAmount < 1) {
      setAmoutIsValid(false);
      return;
    }

    props.onAddToCart(enteredNumberAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <span onClick={decrementHandler}>
          <img src={IconMin} alt="" />
        </span>
        <span className={classes["amount-display"]}>{amountInput}</span>
        <Input
          ref={amountInputRef}
          input={{
            input: "amount_" + props.id,
            type: "number",
            min: "0",
            step: "1",
            value: amountInput,
          }}
        />
        <span onClick={incrementHandler}>
          <img src={IconPlus} alt="" />
        </span>
      </div>
      <button className={classes["add-btn"]}>
        <span>
          <CartIcon />
        </span>
        <span className={classes.addToCart}>Add to cart</span>
      </button>
      {!amountIsValid && <p>Kurang dari 0</p>}
    </form>
  );
};

export default SneakersItemForm;
