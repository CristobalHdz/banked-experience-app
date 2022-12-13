import TableLayout from "../UiHelpers/TableLayout";
import ItemData from "./ItemData";
import itemInfo from "../../DataArray/ItemInfo";

const sortItemArray = (filterValue, itemArray) => {
  return itemArray.sort((a, b) => {
    if (filterValue < 2) {
      if (filterValue == 0) {
        return a.level - b.level;
      } else {
        return b.level - a.level;
      }
    } else {
      if (filterValue == 2) {
        return b.member - a.member;
      } else {
        return a.member - b.member;
      }
    }
  });
};

const ItemListContainer = (props) => {
  const copyArray = [...itemInfo];

  const sortedItem = sortItemArray(props.filterValue, copyArray);

  return (
    <>
      {sortedItem.map((data) => {
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
