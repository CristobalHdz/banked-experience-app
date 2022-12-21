/**
 * Redux functions storage
 * @returns redux functions for adding item
 * TODO: ADD PERCENTAGE, CLEAR ITEMS AND CLEAR PERCENTAGE
 */

import { useReducer } from "react";

import ItemXpContext from "./itemXp-context";

const defaultItemState = {
  items: [],
  totalItemXp: 0,
  bonusXpItems: {
    dwarvenAxe: 0,
    avatarBonus: 0,
    outfitBonus: 0,
    customBonus: 0,
    method: 0,
  },
  bonusXpMod: 0,
};

const ItemXpReducer = (state, action) => {
  if (action.type === "BANKED_XP") {
    // CHECK IF ITEM IS EXISTING INSIDE OF THE ITEM ARRAY
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    let storageArray = [];

    if (localStorage.getItem("ItemObjArray") === null) {
      localStorage.setItem("ItemObjArray", JSON.stringify(storageArray));
    }

    /**
     * Item DOESN'T exist and action value is more than 0
     * @returns array with new object and variable with new totalXp value
     */
    if (!existingItem) {
      updatedItems = state.items.concat(action.item);
    }

    /**
     * Item exists and action value is more than 0
     * @returns array with new item value and variable with new totalXp value
     */
    if (existingItem && action.item.amount > 0) {
      const updatedItem = {
        ...existingItem,
        amount: action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    /**
     * Item exists and action value is 0
     * @returns array with removed item and variable with new totalXp value
     */
    if (existingItem && action.item.amount == 0) {
      updatedItems = state.items.filter((item) => item.id !== action.item.id);
    }

    const updatedTotalAmount =
      state.totalItemXp +
      action.item.experience * action.item.amount -
      (existingItem
        ? state.items[existingItemIndex].amount *
          state.items[existingItemIndex].experience
        : 0);

    // RETURN NEW VALUES
    return {
      items: updatedItems,
      totalItemXp: updatedTotalAmount,
    };
  }

  if (action.type === "XP_MODIFIER") {
    const existingTotalXp = state.totalItemXp;
    const existingXpModItems = { ...state.bonusXpMod };
    let updatedXpModItems = { ...action.item };
    let updatedTotalXp = state.totalItemXp;

    if (existingXpModItems != updatedXpModItems) {
      let accXpMod =
        1 +
        (action.item.avatarBonus +
          action.item.method +
          action.item.outfitBonus) /
          100;

      const bonusXp =
        existingTotalXp > action.item.customBonus
          ? action.item.customBonus
          : existingTotalXp;

      updatedTotalXp =
        (existingTotalXp + action.item.dwarvenAxe) * accXpMod + bonusXp;
    }

    localStorage.setItem("ItemObjArray", JSON.stringify(state.items));

    return {
      items: state.items,
      totalItemXp: state.totalItemXp,
      bonusXpMod: updatedTotalXp,
      bonusXpItems: updatedXpModItems,
    };
  }

  if (action.type === "CLEAR_ALL") {
    localStorage.removeItem("ItemObjArray");
    return defaultItemState;
  }
};

const ItemXpProvider = (props) => {
  const [itemXpState, dispatchItemAction] = useReducer(
    ItemXpReducer,
    defaultItemState
  );

  const addItemXpToTotalHandler = (item) => {
    dispatchItemAction({ type: "BANKED_XP", item: item });
  };

  const addBonusXpHandler = (item) => {
    dispatchItemAction({ type: "XP_MODIFIER", item: item });
  };

  const clearItemXpHandler = () => {
    dispatchItemAction({ type: "CLEAR_XP" });
  };

  const clearBonusXpHandler = () => {
    dispatchItemAction({ type: "CLEAR_XP" });
  };

  const clearAllHandler = () => {
    dispatchItemAction({ type: "CLEAR_ALL" });
  };

  const itemContext = {
    items: itemXpState.items,
    totalItemXp: itemXpState.totalItemXp,
    addItem: addItemXpToTotalHandler,
    bonusXpMod: itemXpState.bonusXpMod,
    bonusXpItems: itemXpState.bonusXpItems,
    addXpMod: addBonusXpHandler,
    clearTotalItemXp: clearItemXpHandler,
    clearTotalBonusXp: clearBonusXpHandler,
    clearAll: clearAllHandler,
  };

  return (
    <ItemXpContext.Provider value={itemContext}>
      {props.children}
    </ItemXpContext.Provider>
  );
};

export default ItemXpProvider;
