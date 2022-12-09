import React from "react";

import ItemData from "../components/ItemData/ItemData";

import Grid from "@mui/material/Grid";

import itemInfo from "../DataArray/ItemInfo.js";

// const DUMMY_PLAYER = {
//   rsName: "lalala",
//   cookingLvl: 50,
//   cookingXp: 101333,
// };

const Mainview = () => {
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
      <Grid container justifyContent="center">
        {itemList}
      </Grid>
    </>
  );
};

export default Mainview;
