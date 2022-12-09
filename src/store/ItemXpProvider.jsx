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
  //   totalPercentageModifier: 0,
};

const ItemXpReducer = (state, action) => {
  if (action.type === "BANKED_XP") {
    // CHECK IF ITEM IS EXISTING INSIDE OF THE ITEM ARRAY
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];
    let updatedItems;

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
    if (existingItem && action.item.amount === 0) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    /**
     * Item DOESN'T exist and action value is more than 0
     * @returns array with new object and variable with new totalXp value
     */
    if (!existingItem) {
      updatedItems = state.items.concat(action.item);
    }

    // * (1 + action.totalPercentageModifier);
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

  //   if (action.type === "CLEAR_XP") {
  //   }

  //   if (action.type === "CLEAR_PERCENTAGE") {
  //   }
};

const ItemXpProvider = (props) => {
  const [itemXpState, dispatchItemAction] = useReducer(
    ItemXpReducer,
    defaultItemState
  );

  const addItemXpToTotalHandler = (item) => {
    dispatchItemAction({ type: "BANKED_XP", item: item });
  };

  const itemContext = {
    items: itemXpState.items,
    totalItemXp: itemXpState.totalItemXp,
    addItem: addItemXpToTotalHandler,
  };

  return (
    <ItemXpContext.Provider value={itemContext}>
      {props.children}
    </ItemXpContext.Provider>
  );
};

export default ItemXpProvider;
