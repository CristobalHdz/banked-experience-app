/**
 * Layout of every table's row
 * @returns row layout
 */

import React, { useContext } from "react";
import ItemXpContext from "../../store/itemXp-context";

import ItemXpQuantity from "./ItemXpQuantity";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import P2Picon from "../../assets/P2P_icon.png";
import F2Picon from "../../assets/F2P_icon.png";

const ItemData = (props) => {
  const itemCtx = useContext(ItemXpContext);

  const addToItemHandler = (amount) => {
    itemCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      experience: props.experience,
    });
  };

  return (
    <>
      <Grid container sx={{ backgroundColor: "#917676", border: 1 }}>
        {/* Member's icon */}
        <Grid
          item
          xs={12}
          md={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderBottom: { xs: 0.5, md: 0 }, marginTop: { xs: 1, md: 0 } }}
        >
          <Box>
            <img src={props.member ? P2Picon : F2Picon} alt="P2P icon" />
          </Box>
        </Grid>

        {/* Item image */}
        <Grid
          item
          xs={12}
          md={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: { xs: 1, md: 0 } }}
        >
          <Box>
            <img src={props.imageUrl} alt={props.name} />
          </Box>
        </Grid>

        {/* Item name */}
        <Grid
          item
          xs={12}
          md={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderBottom: { xs: 0.5, md: 0 } }}
        >
          <b>{props.name}</b>
        </Grid>

        {/* Level */}
        <Grid
          item
          xs={6}
          md={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRight: { xs: 0.5, md: 0 } }}
        >
          <p>
            level: <b>{props.level}</b>
          </p>
        </Grid>

        {/* Experience per item */}
        <Grid
          item
          xs={6}
          md={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <p>
            XP: <b>{props.experience}</b>
          </p>
        </Grid>

        {/* Value input */}
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderTop: { xs: 0.5, md: 0 } }}
        >
          <ItemXpQuantity onAddToItemXp={addToItemHandler} />
        </Grid>
      </Grid>
    </>
  );
};

export default ItemData;
