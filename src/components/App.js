import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) =>
      items.filter(function (item) {
        return item.id !== id;
      })
    );
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map(function (item) {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  }

  function handleClearItem() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        newItemObj={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearItem}
      />
      <Stats newItemObj={items} />
    </div>
  );
}

export default App;
