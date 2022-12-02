// React imports
import React, { useRef, useState } from "react";

// Components imports
import InfoLayout from "../components/InfoLayout";

// MUI imports
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// Item info
import itemInfo from "../DataArray/ItemInfo.js";

const DUMMY_PLAYER = {
  rsName: "lalala",
  cookingLvl: 50,
  cookingXp: 101333,
};

const Mainview = () => {
  const [itemValue, setItemValue] = useState({ name: "", value: "" });

  const amountInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // const itemSum =

    console.log(itemValue);
  };

  const itemList = itemInfo.map((data) => {
    return (
      <Grid item xs={12} sm={10} md={7} key={data.itemId} marginBottom={1}>
        <InfoLayout
          itemId={data.itemId}
          name={data.name}
          member={data.member}
          imageUrl={data.imageUrl}
          level={data.level}
          experience={data.experience}
          ref={amountInputRef}
        />
      </Grid>
    );
  });

  return (
    <form onSubmit={formSubmitHandler}>
      <h1>The Mainview Page</h1>
      <Grid container justifyContent="center">
        {itemList}
      </Grid>
      <Button
        type="submit"
        variant="contained"
        style={{
          textTransform: "none",
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Mainview;
