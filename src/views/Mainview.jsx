import React, { useContext } from "react";

import ItemData from "../components/ItemData/ItemData";

import Grid from "@mui/material/Grid";

import itemInfo from "../DataArray/ItemInfo.js";
import itemContext from "../store/itemXp-context";

// const DUMMY_PLAYER = {
//   rsName: "lalala",
//   cookingLvl: 50,
//   cookingXp: 101333,
// };

const Mainview = () => {
  const itemCtx = useContext(itemContext);
  const { totalItemXp } = itemCtx;

  const itemList = itemInfo.map((data) => {
    return (
      <Grid item xs={12} sm={10} md={7} key={data.id} marginBottom={1}>
        <ItemData
          id={data.id}
          name={data.name}
          member={data.member}
          imageUrl={data.imageUrl}
          level={data.level}
          experience={data.experience}
          // ref={amountInputRef}
        />
      </Grid>
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
