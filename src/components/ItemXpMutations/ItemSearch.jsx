import { useRef } from "react";

import Input from "../UiHelpers/Input";

const ItemSearch = () => {
  const searchRef = useRef();

  return (
    <Input
      ref={searchRef}
      searchFilter={true}
      label="Search for item"
      input={{
        defaultValue: "",
        width: "10rem",
      }}
    />
  );
};

export default ItemSearch;
