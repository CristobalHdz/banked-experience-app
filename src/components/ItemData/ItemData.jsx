/**
 * Layout of every table's row
 * @returns row layout
 */

//TODO: FIX HOW THE INPUT LOOKS
//TODO: FIX HOW THE TABLE LOOKS WHEN CHANGING FROM SM TO XS

import React, { useContext } from "react";
import ItemXpContext from "../../store/itemXp-context";

import BoxFlex from "../../uiHelper/BoxFlex";
import ItemXpQuantity from "./ItemXpQuantity";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import P2Picon from "../../assets/P2P_icon.png";
import F2Picon from "../../assets/F2P_icon.png";

const ItemData = (props) => {
  const itemCtx = useContext(ItemXpContext);

  const addToItemHandler = (amount) => {
    itemCtx.addItem({
      itemId: props.itemId,
      name: props.name,
      amount: amount,
      experience: props.experience,
    });
    console.log(itemCtx);
  };

  return (
    <>
      <Grid container sx={{ backgroundColor: "#917676", border: 1 }}>
        {/* Member's icon */}
        <Grid
          item
          xs={12}
          sm={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <img src={props.member ? P2Picon : F2Picon} alt="P2P icon" />
          </Box>
        </Grid>

        {/* Item image and name */}
        <Grid item xs={12} sm={3}>
          <BoxFlex>
            <Box sx={{ marginRight: 1 }}>
              <img src={props.imageUrl} alt={props.name} />
            </Box>
            <p>
              <b>{props.name}</b>
            </p>
          </BoxFlex>
        </Grid>

        {/* Level */}
        <Grid item xs={6} sm={2}>
          <BoxFlex borderStyle={0.5}>
            <p>
              level: <b>{props.level}</b>
            </p>
          </BoxFlex>
        </Grid>

        {/* Experience per item */}
        <Grid item xs={6} sm={2}>
          <BoxFlex borderStyle={0.5}>
            <p>
              XP: <b>{props.experience}</b>
            </p>
          </BoxFlex>
        </Grid>

        {/* Value input */}
        <Grid
          item
          xs={12}
          sm={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ItemXpQuantity onAddToItemXp={addToItemHandler} />
        </Grid>
      </Grid>
    </>
  );
};

export default ItemData;
