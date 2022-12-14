import Grid from "@mui/material/Grid";
import DropdownSort from "./DropdownSort";
import ItemSearch from "./ItemSearch";

const ItemXpMutationsContainer = (props) => {

  const sortHandler = (selectValue) => {
    props.sortHandler(selectValue);
  };

  const searchHandler = (selectValue) => {
    props.filterHandler(selectValue);
  };

  return (
    <Grid container direction="column" marginBottom="20px">
      <Grid item xs={12} md={6}>
        <DropdownSort
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
