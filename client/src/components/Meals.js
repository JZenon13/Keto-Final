import React, { useState, useEffect } from "react";
import MealCard from "./MealCard";

function Meals({ user, setMeals, meals }) {
  const [typeSearch, setTypeSearch] = useState("");
  const [search, setSearch] = useState("");
  const [deleteItem, setDeleteItem] = useState([]);
  useEffect(() => {
    fetch("/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, [deleteItem]);
  const foodsToShow = meals.filter((item) =>
    item.name.toLowerCase().includes(typeSearch.toLowerCase())
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(typeSearch);
  };

  return (
    <div>
      <form className="text-center" onSubmit={handleSubmit}>
        <div className="centerStuff">Meals:</div>
        <input
          type="text"
          id="search"
          placeholder="Search meals"
          value={typeSearch}
          onChange={(e) => setTypeSearch(e.target.value)}
        />
        <button className="centerButtons" type="submit">
          Search
        </button>
      </form>
      {foodsToShow.map((meal) => {
        return (
          <MealCard
            meal={meal}
            key={meal.id}
            user={user}
            setMeals={setMeals}
            setDeleteItem={setDeleteItem}
          />
        );
      })}
    </div>
  );
}

export default Meals;
