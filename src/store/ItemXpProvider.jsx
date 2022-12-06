import { useReducer } from "react";

import ItemXpContext from "./itemXp-context";

const defaultItemState = {
  items: [],
  totalItemXp: 0,
  //   totalPercentageModifier: 0,
};

const ItemXpReducer = (state, action) => {
  if (action.type === "BANKED_XP") {
    // GET TOTAL AMOUNT OF EXPERIENCE
    const updatedTotalAmount =
      state.totalItemXp + action.item.experience * action.item.amount;
    // * (1 + action.totalPercentageModifier);

    // CHECK IF ITEM IS EXISTING INSIDE OF THE ITEM ARRAY
    const existingItemIndex = state.items.findIndex(
      (item) => item.itemId === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItem] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

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
