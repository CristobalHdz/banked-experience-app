import React from "react";
import Grid from "@mui/material/Grid";

const TableLayout = (props) => {
  return (
    <React.Fragment key={props.id}>
      <Grid item xs="auto" xl={3}></Grid>
      <Grid item xs={12} md={10} xl={6} marginBottom={1}>
        {props.children}
      </Grid>
      <Grid item xs="auto" xl={3}></Grid>
    </React.Fragment>
  );
};

export default TableLayout;
