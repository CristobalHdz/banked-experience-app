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
    ? itemArray.filter((data) =>
        data.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    : itemArray;
};

const filterExistingValue = (filterExisting, itemArray) => {
  return filterExisting
    ? itemArray.filter((data) => data.amount.length > 0)
    : itemArray;
};

const ItemListContainer = (props) => {
  let copyArray = [...itemInfo];
  const localStorageValue = JSON.parse(localStorage.getItem("ItemObjArray"));

  const filterData = filterItemArray(
    props.filterValue,
    sortItemArray(props.sortValue, copyArray)
  );

  return (
    <>
      {filterData.map((data) => {
        let storageAmount;
        if (JSON.parse(localStorage.getItem("ItemObjArray")) !== null) {
          const index = localStorageValue.findIndex((item) => {
            return item.id == data.id;
          });

          if (index > -1) {
            storageAmount = localStorageValue[index].amount;
          }

          if (props.filterExisting && !storageAmount) {
            return;
          }
        }

        return (
          <TableLayout key={data.id}>
            <ItemData
              id={data.id}
              name={data.name}
              member={data.member}
              imageUrl={data.imageUrl}
              level={data.level}
              experience={data.experience}
              amount={storageAmount}
            />
          </TableLayout>
        );
      })}
    </>
  );
};

export default ItemListContainer;
