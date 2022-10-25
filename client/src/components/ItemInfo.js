import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
function ItemInfo({ items, setNewMealItems, newMealItems }) {
  const [allItems, setAllItems] = useState([]);
  const [oneItem, setOneItem] = useState(false);
  const [button, setButton] = useState(false);
  const [item, setItem] = useState(true);

  const handleClick = () => {
    setOneItem(!oneItem);
    setButton(!button);
  };

  const handleAddItem = (items) => {
    setItem(!item);

    if (newMealItems.includes(items)) {
      setNewMealItems(newMealItems.filter((item) => item !== items));
    } else {
      setNewMealItems((newMealItems) => [...newMealItems, items]);
    }
  };

  return (
    <>
      <div className="app">
        <div key={items.id} className="itemBox">
          <div>
            <img className="belt" src={items.img_url} alt="item"></img>
          </div>
          <div>
            {oneItem ? <ItemCard items={items} /> : null}
            <div>
              <button
                className="form button"
                onClick={() => handleClick(items)}
              >
                {button ? "Hide Info" : "Show Info"}
              </button>
              <button onClick={() => handleAddItem(items)}>
                {item ? "Add Item" : "Added"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemInfo;
