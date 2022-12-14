import React, { useContext, useState } from "react";

import Grid from "@mui/material/Grid";

import itemContext from "../store/itemXp-context";
import ItemXpMutationsContainer from "../components/ItemXpMutations/ItemXpMutationsContainer";
import ItemListContainer from "../components/ItemData/ItemListContainer.jsx";

const Mainview = () => {
  const [sortValue, setSortValue] = useState(0);
  const [filterValue, setFilterValue] = useState("");
  const itemCtx = useContext(itemContext);
  const { totalItemXp } = itemCtx;

  const sortHandler = (value) => {
    setSortValue(value);
  };

  const filterHandler = (value) => {
    setFilterValue(value);
  };

  return (
    <Grid container justifyContent="center">
      <h1>The Mainview Page</h1>
      <Grid item xs={12}>
        <h1>{Math.floor(totalItemXp).toLocaleString()}</h1>
      </Grid>
      <Grid item xs={12} md={6}>
        <ItemXpMutationsContainer
          sortHandler={sortHandler}
          filterHandler={filterHandler}
        />
      </Grid>
      <Grid container justifyContent="center">
        <ItemListContainer filterValue={filterValue} sortValue={sortValue} />
      </Grid>
    </Grid>
  );
};

export default Mainview;
