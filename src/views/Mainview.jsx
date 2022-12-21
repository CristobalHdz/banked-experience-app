import React, { useContext, useState } from "react";

import Grid from "@mui/material/Grid";

import itemContext from "../store/itemXp-context";
import ItemXpMutationsContainer from "../components/ItemXpMutations/ItemXpMutationsContainer";
import ItemListContainer from "../components/ItemData/ItemListContainer.jsx";
import ClearData from "../components/ClearData/ClearData";

import classes from "./Mainview.module.css";
import ScrollBtn from "../components/UiHelpers/ScrollBtn";

const Mainview = () => {
  const [sortValue, setSortValue] = useState(0);
  const [filterValue, setFilterValue] = useState("");
  const itemCtx = useContext(itemContext);
  const { totalItemXp, bonusXpMod } = itemCtx;
  const minXpToShow = 9;

  const shownBaseXp =
    totalItemXp > 0
      ? totalItemXp
      : JSON.parse(localStorage.getItem("BaseStoredXp"));

  const sortHandler = (value) => {
    setSortValue(value);
  };

  const filterHandler = (value) => {
    setFilterValue(value);
  };

  const showBonusXp = bonusXpMod !== shownBaseXp && bonusXpMod > minXpToShow;

  return (
    <Grid container justifyContent="center" className={classes.mainview}>
      <h1>Banked cooking experience</h1>

      <Grid item xs={12}>
        <div>
          <h2>Banked base experience</h2>
          <h1>{Math.floor(shownBaseXp).toLocaleString()}</h1>
        </div>

        {showBonusXp && (
          <div>
            <h2>Banked experience with bonuses</h2>
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
        <ClearData totalItemXp={shownBaseXp} />
      </Grid>

      <Grid container justifyContent="center">
        <ItemListContainer filterValue={filterValue} sortValue={sortValue} />
      </Grid>

      <ScrollBtn />
    </Grid>
  );
};

export default Mainview;
