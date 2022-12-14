import { useRef } from "react";

import Input from "../UiHelpers/Input";

const ItemSearch = (props) => {
  const searchRef = useRef();

  const searchHandler = (event) => {
    event.preventDefault();

    const filterText = searchRef.current.value;
    props.onFilterText(filterText);
  };

  return (
    <form onChange={searchHandler}>
      <Input
        ref={searchRef}
        searchFilter={true}
        label="Search for item"
        input={{
          defaultValue: "",
        }}
      />
    </form>
  );
};

export default ItemSearch;
