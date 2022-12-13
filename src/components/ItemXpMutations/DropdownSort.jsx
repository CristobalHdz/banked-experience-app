import classes from "./DropdownSort.module.css";
const DropdownSort = (props) => {
  const handleChange = (event) => {
    props.selectValueChange(event.target.value);
  };

  return (
    <div className={classes.select}>
      <label htmlFor={props.select}>{props.label}</label>
      <select {...props.select} onChange={handleChange} value={props.value}>
        <option value={0}>level(Lowest to Highest)</option>
        <option value={1}>level(Highest to Lowest)</option>
        <option value={2}>Member</option>
        <option value={3}>Non-Member</option>
      </select>
    </div>
  );
};

export default DropdownSort;
