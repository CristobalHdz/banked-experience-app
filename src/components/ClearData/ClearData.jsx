import { useContext } from "react";
import ItemXpContext from "../../store/itemXp-context";

import Grid from "@mui/material/Grid";
import classes from "./ClearData.module.css";

const ClearData = (props) => {
  const itemCtx = useContext(ItemXpContext);

  const clearAllHandler = (e) => {
    e.stopPropagation();
    if (window.confirm("Delete all items? The page will reload!")) {
      itemCtx.clearAll();
    }
    location.reload();
  };

  const disableBtn = props.totalItemXp == null;

  return (
    <Grid container className={classes.clearData} justifyContent="center">
      <Grid item xs={12} md={3}>
        <button onClick={clearAllHandler} disabled={disableBtn}>
          Clear All
        </button>
      </Grid>
    </Grid>
  );
};

export default ClearData;
