import React from "react";
import Dropdown from "../UiHelpers/Dropdown";
import Input from "../UiHelpers/Input";

import Grid from "@mui/material/Grid";

const ItemModifier = React.forwardRef((props, ref) => {
  return (
    <Grid
      item
      xs={12}
      sm={props.sizeReset == 0 ? props.sizeReset : 6}
      md={props.sizeReset == 0 ? props.sizeReset : 4}
      marginBottom="2rem"
    >
      {props.typeInput == "DropDown" && (
        <Dropdown
          id={props.id}
          ref={ref}
          label={props.label}
          dropDownData={props.dropDownData}
          value={props.sortValue}
        />
      )}
      {props.typeInput == "input" && (
        <Input
          id={props.id}
          ref={ref}
          label={props.label}
          checkBox={props.typeInput}
          searchFilter={props.searchFilter}
          input={{
            defaultValue: "",
            ...props.input,
          }}
        />
      )}
    </Grid>
  );
});

export default ItemModifier;
