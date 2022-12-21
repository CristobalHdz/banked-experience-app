/**
 * Input and submit button for ammount of items
 *  @returns amount of items with their id
 */

import { useRef } from "react";

import Input from "../UiHelpers/Input";

import classes from "./ItemXpQuantity.module.css";

const ItemXpQuantity = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const itemQuantity = amountInputRef.current.value;

    props.onAddToItemXp(itemQuantity);
  };

  let value = props.amount === 0 ? "" : props.amount;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "0",
          max: "2147483647",
          defaultValue: value,
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default ItemXpQuantity;
