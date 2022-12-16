import React from "react";
import classes from "./Dropdown.module.css";
const Dropdown = React.forwardRef((props, ref) => {
  const dataDrop = [...props.dropDownData];

  return (
    <div className={classes.select}>
      <label htmlFor={props.select}>{props.label}</label>
      <select id={props.id} {...props.select} ref={ref} value={props.value}>
        {dataDrop.map((data) => {
          return (
            <option value={data.value} key={data.name}>
              {data.name}
            </option>
          );
        })}
      </select>
    </div>
  );
});

export default Dropdown;
