/**
 * Helper context for item Xp
 *  @returns object with info for itemXp, addItems, total% and clear of all data
 */

import React from "react";

const ItemXpContext = React.createContext({
  items: [],
  totalItemXp: 0,
  addItem: (item) => {},
  bonusXpItems: {},
  bonusXpMod: 0,
  addXpMod: (item) => {},
  // clearItemXp: () => {},
  //   clearPercentageModifier: () => {},
});

export default ItemXpContext;
