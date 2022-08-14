import React, { useState, useEffect } from "react";
import AddMeal from "./AddMeal";
import Item from "./Item";
import NewMeal from "./NewMeal";
import AddFood from "./AddFood";

function MealItems({ setMeals, meals }) {
  let numItems = 4;

  const [mealItems, setMealItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [searchFoods, setSearchFoods] = useState("Empty");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newMealItems, setNewMealItems] = useState([]);
  const [newMeal, setNewMeal] = useState(false);
  const [newFood, setNewFood] = useState(false);
  const [newFoodItem, setNewFoodItem] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        setMealItems(data.slice(currentIndex, numItems + currentIndex));
        setAllItems(data);
      });
  }, [newFoodItem]);

  let filteredFoods = allItems?.filter((food) => food.category === searchFoods);

  let displayFoods = filteredFoods.slice(currentIndex, currentIndex + numItems);

  function showNext() {
    setCurrentIndex(currentIndex + numItems);
  }

  function handleNewMeal() {
    setNewMeal(!newMeal);
  }

  function handleNewPage() {
    setNewFood(!newFood);
    setNewMeal(!newMeal);
  }
  return (
    <>
      <div>
        <label for="entries">Choose a Category:</label>
        <select
          name="foodCat"
          id="foodCat"
          value={searchFoods}
          onChange={(e) => setSearchFoods(e.target.value)}
        >
          <option value="Empty">All Items</option>
          <option value="Protein">Protein</option>
          <option value="Dairy">Dairy</option>
          <option value="Oils">Oils</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Nuts/Seeds">Nuts/Seeds</option>
          <option value="Herbs/Spices">Herbs/Spices</option>
          <option value="Other">Other</option>
        </select>
        <div></div>
      </div>
      <div className="belt">
        <br></br>
        {searchFoods === "Empty"
          ? mealItems.map((items) => {
              return (
                <Item
                  items={items}
                  setNewMealItems={setNewMealItems}
                  newMealItems={newMealItems}
                />
              );
            })
          : displayFoods.map((items) => {
              return (
                <div key={items.id}>
                  <Item
                    items={items}
                    setNewMealItems={setNewMealItems}
                    newMealItems={newMealItems}
                  />
                </div>
              );
            })}
      </div>
      <button className="moreButton" onClick={showNext}>
        More Items
      </button>
      <button className="moreButton" onClick={() => handleNewMeal()}>
        👇🏿👇🏾👇🏽👇🏼 Meal to Be 👇🏼👇🏽👇🏾👇🏿
      </button>
      <AddMeal newMealItems={newMealItems} />
      {newFood ? (
        <AddFood
          handleNewPage={handleNewPage}
          setNewFood={setNewFood}
          setNewMeal={setNewMeal}
          newFood={newFood}
          newMeal={newMeal}
          setAllItems={setAllItems}
          setNewFoodItem={setNewFoodItem}
        />
      ) : null}
      {newMeal ? (
        <NewMeal
          handleNewPage={handleNewPage}
          setMeals={setMeals}
          meals={meals}
          newMeal={newMeal}
          setNewMeal={setNewMeal}
          newFood={newFood}
          setNewFood={setNewFood}
        />
      ) : null}
    </>
  );
}

export default MealItems;
