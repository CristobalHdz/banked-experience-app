import { useState } from "react";
import DropdownSort from "./DropdownSort";

const ItemXpMutationsContainer = (props) => {
  const [filter, setFilter] = useState(0);

  const handleChange = (selectValue) => {
    setFilter(selectValue);
    props.filterHandler(selectValue);
  };

  return (
    <DropdownSort
      selectValueChange={handleChange}
      value={filter}
      label="Sort by"
    />
  );
};

export default ItemXpMutationsContainer;
