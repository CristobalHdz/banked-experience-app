import { useRef } from "react";

import Input from "./Input";

import classes from "./ItemXpQuantity.module.css";

const ItemXpQuantity = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const itemQuantity = amountInputRef.current.value;
    const enteredItemAmount = +itemQuantity;

    props.onAddToItemXp(enteredItemAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.itemId,
          type: "number",
          min: "0",
          max: "2147483647",
          step: "1",
          defaultValue: "",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default ItemXpQuantity;
