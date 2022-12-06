/**
 * Helper context for item Xp
 *  @returns object with info for itemXp, addItems, total% and clear of all data
 */

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
