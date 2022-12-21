import { useRef } from "react";

import Grid from "@mui/material/Grid";

import ItemModifier from "./ItemModifier";
import classes from "./ItemXpModifiers.module.css";

const ItemXpModifiers = (props) => {
  const armyAxeXpRef = useRef();
  const avatarRef = useRef();
  const outfitRef = useRef();
  const customBonusRef = useRef();
  const methodRef = useRef();

  const submitXpModHandler = (event) => {
    event.preventDefault();

    const dwarvenAxeXp = armyAxeXpRef.current.checked ? 3 : 0;

    const xpModItem = {
      dwarvenAxe: dwarvenAxeXp,
      avatarBonus: parseInt(avatarRef.current.value),
      outfitBonus: parseInt(outfitRef.current.value),
      customBonus: parseInt(customBonusRef.current.value),
      method: parseInt(methodRef.current.value),
    };

    props.onAddToXpMod(xpModItem);
  };
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
    <form className={classes.form} onSubmit={submitXpModHandler}>
      <Grid container marginBottom="20px">
        <Grid item xs="auto" md={2}></Grid>
        {/* Dwarven army axe */}
        <ItemModifier
          id="armyAxe"
          ref={armyAxeXpRef}
          label="Dwarven army axe (+3 xp)"
          dropDownData={dropDownAvatar}
          value={props.sortValue}
          typeInput="input"
          input={{
            type: "checkbox",
          }}
        />

        <ItemModifier
          id="avatarBonus"
          ref={avatarRef}
          label="Avatar bonus"
          dropDownData={dropDownAvatar}
          value={props.sortValue}
          typeInput="DropDown"
        />
        <Grid item xs="auto" md={1}></Grid>
        <Grid item xs="auto" md={2}></Grid>

        <ItemModifier
          id="outfit"
          ref={outfitRef}
          typeInput="DropDown"
          dropDownData={dropDownOutfit}
          value={props.sortValue}
          label="Cooking outfit"
        />

        <ItemModifier
          id="customXp"
          ref={customBonusRef}
          typeInput="input"
          searchFilter={true}
          label="Custom experience"
          input={{
            min: "0",
            type: "number",
          }}
        />
        <Grid item xs="auto" md={1}></Grid>
        <Grid item xs="auto" sm={3} md={4}></Grid>

        <ItemModifier
          id="cookingMethod"
          ref={methodRef}
          typeInput="DropDown"
          dropDownData={dropDownMethod}
          value={props.sortValue}
          label="Cooking method"
        />
      </Grid>
      <button>Submit</button>
    </form>
  );
};

export default ItemXpModifiers;
