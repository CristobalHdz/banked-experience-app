import React from "react";
import classes from "./Dropdown.module.css";
const DropdownSort = (props) => {
  const dataDrop = [...props.dropDownData];

  const handleSort = (event) => {
    props.selectValueChange(event.target.value);
  };

  return (
    <div className={classes.select}>
      <label htmlFor={props.select}>{props.label}</label>
      <select
        id={props.id}
        {...props.select}
        value={props.value}
        onChange={handleSort}
      >
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
};

export default DropdownSort;
