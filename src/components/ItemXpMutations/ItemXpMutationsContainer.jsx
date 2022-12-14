import { useState } from "react";
import Grid from "@mui/material/Grid";
import DropdownSort from "./DropdownSort";
import ItemSearch from "./ItemSearch";

const ItemXpMutationsContainer = (props) => {
  const [filter, setFilter] = useState(0);

  const handleChange = (selectValue) => {
    setFilter(selectValue);
    props.filterHandler(selectValue);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <DropdownSort
          selectValueChange={handleChange}
          value={filter}
          label="Sort by"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ItemSearch />
      </Grid>
    </Grid>
  );
};

export default ItemXpMutationsContainer;
