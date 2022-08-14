import React from "react";
import ItemInfo from "./ItemInfo";

function Item({ items, setNewMealItems, newMealItems }) {
  return (
    <div className="belt">
      <ItemInfo
        key={items.id}
        items={items}
        setNewMealItems={setNewMealItems}
        newMealItems={newMealItems}
      />
    </div>
  );
}

export default Item;
