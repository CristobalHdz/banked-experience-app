import Grid from "@mui/material/Grid";
import Input from "../UiHelpers/Input";
import Dropdown from "../UiHelpers/Dropdown";

const ItemXpModifier = (props) => {
  const dropDownAvatar = [
    { name: "+0%", value: 0 },
    { name: "+3%", value: 3 },
    { name: "+4%", value: 4 },
    { name: "+5%", value: 5 },
    { name: "+6%", value: 6 },
  ];

  const dropDownOutfit = [
    { name: "0 (+0%)", value: 0 },
    { name: "1 (+1%)", value: 1 },
    { name: "2 (+2%)", value: 2 },
    { name: "3 (+3%)", value: 3 },
    { name: "4 (+4%)", value: 4 },
    { name: "5 (+6%)", value: 6 },
  ];

  const dropDownMethod = [
    { name: "Range (+0%)", value: 0 },
    { name: "Priffdinas bonfire (0%)", value: 0 },
    { name: "Bonfire (10%)", value: 10 },
    { name: "Portable Range (25%)", value: 25 },
  ];

  return (
    <Grid container marginBottom="20px">
      <Grid item xs="auto" md={2}></Grid>
      <Grid item xs={12} sm={6} md={4} marginBottom="2rem">
        <Input
          //   ref={searchRef}
          label="Dwarven army axe"
          searchFilter={true}
          input={{
            defaultValue: "",
            type: "checkbox",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} marginBottom="2rem">
        <Dropdown
          dropDownData={dropDownAvatar}
          //   selectValueChange={sortHandler}
          value={props.sortValue}
          label="Avatar bonus"
        />
      </Grid>
      <Grid item xs="auto" md={1}></Grid>
      <Grid item xs="auto" md={2}></Grid>
      <Grid item xs={12} sm={6} md={4} marginBottom="2rem">
        <Dropdown
          dropDownData={dropDownOutfit}
          //   selectValueChange={sortHandler}
          value={props.sortValue}
          label="Cooking outfit"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4} marginBottom="2rem">
        <Input
          //   ref={searchRef}
          label="Custom experience"
          searchFilter={true}
          input={{
            defaultValue: "",
            type: "number",
            min: "0",
            max: "200000000",
          }}
        />
      </Grid>
      <Grid item xs={12} marginBottom="2rem">
        <Dropdown
          dropDownData={dropDownMethod}
          //   selectValueChange={sortHandler}
          value={props.sortValue}
          label="Cooking method"
        />
      </Grid>
    </Grid>
  );
};

export default ItemXpModifier;
