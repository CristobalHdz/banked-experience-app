import { useRef } from "react";

import ItemModifier from "./ItemModifier";

const ExistingItemFilter = (props) => {
  const filterExistingRef = useRef();

  const searchHandler = () => {
    props.onFilterExisting(filterExistingRef.current.checked);
  };

  return (
    <form onChange={searchHandler}>
      <ItemModifier
        sizeReset={0}
        id="ExistingFilter"
        ref={filterExistingRef}
        label="Show only filled items"
        typeInput="input"
        input={{
          type: "checkbox",
        }}
      />
    </form>
  );
};

export default ExistingItemFilter;
