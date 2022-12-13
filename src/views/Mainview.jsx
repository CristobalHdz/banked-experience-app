import React, { useContext } from "react";

import Grid from "@mui/material/Grid";

import TableLayout from "../components/UiHelpers/TableLayout";
import ItemData from "../components/ItemData/ItemData";

import itemInfo from "../DataArray/ItemInfo.js";
import itemContext from "../store/itemXp-context";
// import DropdownSort from "../components/UiHelpers/DropdownSort";

const Mainview = () => {
  const itemCtx = useContext(itemContext);
  const { totalItemXp } = itemCtx;

  const filterSortHandler = () => {

  }

  const sortedItemInfo = itemInfo.sort((a, b) => a.level - b.level);

  const itemList = sortedItemInfo.map((data) => {
    return (
      <TableLayout id={data.id}>
        <ItemData
          id={data.id}
          name={data.name}
          member={data.member}
          imageUrl={data.imageUrl}
          level={data.level}
          experience={data.experience}
        />
      </TableLayout>
    );
  });

  return (
    <>
      <h1>The Mainview Page</h1>
      <Grid item xs={12}>
        <h1>{Math.floor(totalItemXp).toLocaleString()}</h1>
      </Grid>
      {/* <Grid item xs={12}>
        <DropdownSort />
      </Grid> */}
      <Grid container justifyContent="center">
        {itemList}
      </Grid>
    </>
  );
};

export default Mainview;
