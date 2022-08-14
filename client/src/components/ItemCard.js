import React from "react";

function ItemCard({ items }) {
  return (
    <div className="">
      <div>
        <h4 classname="itemText">{items.name}</h4>
      </div>
      <div>
        <h5 classname="itemText">Carbs:{items.carbs}</h5>
      </div>

      <h5 classname="itemText">Category:{items.category}</h5>
      <h6 classname="itemText">Blurb:{items.description}</h6>
    </div>
  );
}

export default ItemCard;
