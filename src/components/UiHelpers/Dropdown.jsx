import classes from "./Dropdown.module.css";
const Dropdown = (props) => {
  const handleChange = (event) => {
    props.selectValueChange(event.target.value);
  };

  const dataDrop = [...props.dropDownData];

  return (
    <div className={classes.select}>
      <label htmlFor={props.select}>{props.label}</label>
      <select {...props.select} onChange={handleChange} value={props.value}>
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

export default Dropdown;
