import { useState } from "react";
import List from "./List";

function PackingList({ newItemObj, onDeleteItem, onToggleItem, onClearItem }) {
  const [sortBy, setSortBy] = useState("input");
  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  let sortedItems;
  if (sortBy === "input") sortedItems = newItemObj;
  if (sortBy === "description") {
    sortedItems = newItemObj.slice().sort(function (a, b) {
      return a.description.localeCompare(b.description);
    });
  }
  if (sortBy === "packed") {
    sortedItems = newItemObj.slice().sort(function (a, b) {
      return Number(a.packed) - Number(b.packed);
    });
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map(function (item) {
          return (
            <List
              itemObj={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={handleSortChange}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed Status</option>
        </select>
        <button onClick={onClearItem}>clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
