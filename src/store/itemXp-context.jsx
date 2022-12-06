import React from "react";

const ItemXpContext = React.createContext({
  item: [],
  totalItemXp: 0,
  addItem: (item) => {},
  //   totalPercentageModifier: 0,
  clearItemXp: () => {},
  //   clearPercentageModifier: () => {},
});

export default ItemXpContext;
