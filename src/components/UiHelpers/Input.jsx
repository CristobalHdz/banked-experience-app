/**
 * Input functionality
 *  @returns a number with id
 */

import React from "react";
import classes from "./Input.module.css";
import "./SearchField.css";

const Input = React.forwardRef((props, ref) => {
  const theme = !props.searchFilter ? classes.input : 'searchField';

  return (
    <div className={theme}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
