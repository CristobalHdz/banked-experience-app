import React, { useContext } from "react";

import ItemData from "../components/ItemData/ItemData";

import Grid from "@mui/material/Grid";

import itemInfo from "../DataArray/ItemInfo.js";
import itemContext from "../store/itemXp-context";

const Mainview = () => {
  const itemCtx = useContext(itemContext);
  const { totalItemXp } = itemCtx;

  const itemList = itemInfo.map((data) => {
    return (
      <React.Fragment key={data.id}>
        <Grid item xs="auto" xl={3}></Grid>
        <Grid item xs={12} md={10} xl={6} marginBottom={1}>
          <ItemData
            id={data.id}
            name={data.name}
            member={data.member}
            imageUrl={data.imageUrl}
            level={data.level}
            experience={data.experience}
          />
        </Grid>
        <Grid item xs="auto" xl={3}></Grid>
      </React.Fragment>
    );
  });

  return (
    <>
      <h1>The Mainview Page</h1>
      <Grid item xs={12}>
        <h1>{Math.floor(totalItemXp).toLocaleString()}</h1>
      </Grid>
      <Grid container justifyContent="center">
        {itemList}
      </Grid>
    </>
  );
};

export default Mainview;
