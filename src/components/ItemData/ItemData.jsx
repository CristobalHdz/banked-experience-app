/**
 * Layout of every table's row
 * @returns row layout
 */

import React, { useContext } from "react";
import ItemXpContext from "../../store/itemXp-context";

import ItemXpQuantity from "./ItemXpQuantity";

import Grid from "@mui/material/Grid";

import P2Picon from "../../assets/P2P_icon.png";
import F2Picon from "../../assets/F2P_icon.png";
import TableLayoutItem from "../UiHelpers/TableLayoutItem";

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
      <Grid container sx={{ backgroundColor: "#526181", border: 1 }}>
        {/* Member's icon */}
        <TableLayoutItem
          xsBp={12}
          mdBp={1}
          tableStyle={{
            borderBottom: { xs: 0.5, md: 0 },
            marginTop: { xs: 1, md: 0 },
          }}
        >
          <img src={props.member ? P2Picon : F2Picon} alt="P2P icon" />
        </TableLayoutItem>

        {/* Item image */}
        <TableLayoutItem
          xsBp={12}
          mdBp={1}
          tableStyle={{ marginTop: { xs: 1, md: 0 } }}
        >
          <img src={props.imageUrl} alt={props.name} />
        </TableLayoutItem>

        {/* Item name */}
        <TableLayoutItem
          xsBp={12}
          mdBp={2}
          tableStyle={{ borderBottom: { xs: 0.5, md: 0 } }}
        >
          <b>{props.name}</b>
        </TableLayoutItem>

        {/* Level */}
        <TableLayoutItem
          xsBp={6}
          mdBp={2}
          tableStyle={{ borderRight: { xs: 0.5, md: 0 } }}
        >
          <p>
            level: <b>{props.level}</b>
          </p>
        </TableLayoutItem>

        {/* Experience per item */}
        <TableLayoutItem xsBp={6} mdBp={2}>
          <p>
            XP <b>{props.experience}</b>
          </p>
        </TableLayoutItem>

        {/* Value input */}
        <TableLayoutItem
          xsBp={12}
          mdBp={4}
          tableStyle={{ borderTop: { xs: 0.5, md: 0 } }}
        >
          <ItemXpQuantity
            onAddToItemXp={addToItemHandler}
            amount={props.amount}
          />
        </TableLayoutItem>
      </Grid>
    </>
  );
};

export default ItemData;
