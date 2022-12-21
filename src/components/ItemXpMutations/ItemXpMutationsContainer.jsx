import React, { useContext } from "react";

import Grid from "@mui/material/Grid";
import DropdownSort from "../UiHelpers/DropdownSort";
import ItemSearch from "./ItemSearch";
import ItemXpModifiers from "./ItemXpModifiers";
import ItemXpContext from "../../store/itemXp-context";

const ItemXpMutationsContainer = (props) => {
  const xpModCtx = useContext(ItemXpContext);

  const addToXpModHandler = (obj) => {
    xpModCtx.addXpMod(obj);
    props.showXpHanlder(true);
  };

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
      <Grid item xs={12} md={6} marginBottom="1rem">
        <ItemSearch onFilterText={searchHandler} />
      </Grid>
      <Grid item xs={12}>
        <h2>Item xp modifier</h2>
        <ItemXpModifiers onAddToXpMod={addToXpModHandler} />
      </Grid>
    </Grid>
  );
};

export default ItemXpMutationsContainer;
