import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";

const TableLayoutItem = (props) => {
  return (
    <Grid
      item
      xs={props.xsBp}
      md={props.mdBp}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ ...props.tableStyle }}
    >
      <Box>{props.children}</Box>
    </Grid>
  );
};

export default TableLayoutItem;
