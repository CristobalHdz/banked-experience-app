// import React
import { useRef } from "react";

// Import components
import Input from "./Input";

// Import CSS
import classes from "./ItemXpQuantity.module.css";

const ItemXpQuantity = (props) => {
  const amountInputRef = useRef();

  const handleSubmitQuantity = (event) => {
    event.preventDefault();

    const itemQuantity = amountInputRef.current.value;
    const itemExperience = props.experience;

    const totalExperience = (itemQuantity * itemExperience).toFixed(1);

    console.log(totalExperience);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmitQuantity}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: props.name,
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
