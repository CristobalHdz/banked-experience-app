import TableLayout from "../UiHelpers/TableLayout";
import ItemData from "./ItemData";
import itemInfo from "../../DataArray/ItemInfo";

const sortItemArray = (sortValue, itemArray) => {
  return itemArray.sort((a, b) => {
    if (sortValue < 2) {
      if (sortValue == 0) {
        return a.level - b.level;
      } else {
        return b.level - a.level;
      }
    } else {
      if (sortValue == 2) {
        return b.member - a.member;
      } else {
        return a.member - b.member;
      }
    }
  });
};

const filterItemArray = (filterValue, itemArray) => {
  return filterValue
    ? itemArray.filter((data) => data.name.toLowerCase().includes(filterValue.toLowerCase()))
    : itemArray;
};

const ItemListContainer = (props) => {
  const copyArray = [...itemInfo];

  const filterData = filterItemArray(
    props.filterValue,
    sortItemArray(props.sortValue, copyArray)
  );

  return (
    <>
      {filterData.map((data) => {
        return (
          <TableLayout key={data.id}>
            <ItemData
              id={data.id}
              name={data.name}
              member={data.member}
              imageUrl={data.imageUrl}
              level={data.level}
              experience={data.experience}
            />
          </TableLayout>
        );
      })}
    </>
  );
};

export default ItemListContainer;
