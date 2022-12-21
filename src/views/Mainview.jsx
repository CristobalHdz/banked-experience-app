import React, { useContext, useState } from "react";

import Grid from "@mui/material/Grid";

import itemContext from "../store/itemXp-context";
import ItemXpMutationsContainer from "../components/ItemXpMutations/ItemXpMutationsContainer";
import ItemListContainer from "../components/ItemData/ItemListContainer.jsx";
import ClearData from "../components/ClearData/ClearData";

const Mainview = () => {
  const [sortValue, setSortValue] = useState(0);
  const [filterValue, setFilterValue] = useState("");
  const itemCtx = useContext(itemContext);
  const { totalItemXp, bonusXpMod } = itemCtx;

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
        {!totalItemXp == 0 && (
          <div>
            <h2>Experience without bonus xp modifiers: </h2>
            <h1>{Math.floor(totalItemXp).toLocaleString()}</h1>
          </div>
        )}

        {!bonusXpMod == 0 && (
          <div>
            <h2>Experience with bonus xp modifiers: </h2>
            <h1>{Math.floor(bonusXpMod).toLocaleString()}</h1>
          </div>
        )}
      </Grid>

      <Grid item xs={12} sm={12} md={10}>
        <ItemXpMutationsContainer
          sortHandler={sortHandler}
          filterHandler={filterHandler}
        />
      </Grid>

      <Grid item xs={12} justifyContent="center">
        <ClearData totalItemXp={totalItemXp} />
      </Grid>

      <Grid container justifyContent="center">
        <ItemListContainer filterValue={filterValue} sortValue={sortValue} />
      </Grid>
    </Grid>
  );
};

export default Mainview;
