import Grid from "@mui/material/Grid";
import DropdownSort from "../UiHelpers/Dropdown";
import ItemSearch from "./ItemSearch";

const ItemXpMutationsContainer = (props) => {
  const sortHandler = (selectValue) => {
    props.sortHandler(selectValue);
  };

  const searchHandler = (selectValue) => {
    props.filterHandler(selectValue);
  };

  const dropDownData = [
    { name: "Level (Lowest to Highest)", value: 0 },
    { name: "Level (Highest to Lowest)", value: 1 },
    { name: "Member", value: 2 },
    { name: "Non-Member", value: 3 },
  ];

  return (
    <Grid container direction="column" marginBottom="20px">
      <Grid item xs={12} md={6}>
        <DropdownSort
          dropDownData={dropDownData}
          selectValueChange={sortHandler}
          value={props.sortValue}
          label="Sort by"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ItemSearch onFilterText={searchHandler} />
      </Grid>
    </Grid>
  );
};

export default ItemXpMutationsContainer;
