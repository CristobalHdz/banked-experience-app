/**
 * Input functionality
 *  @returns a number with id
 */

import React from "react";
import classes from "./Input.module.css";
import "./SearchField.css";
import "./CheckBox.css";

const Input = React.forwardRef((props, ref) => {
  const theme = props.searchFilter
    ? "searchField"
    : props.checkBox
    ? "checkBox"
    : classes.input;

  return (
    <div className={theme}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.id} ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
