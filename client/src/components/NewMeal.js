import React, { useState } from "react";

function NewMeal({ newFood, setNewFood, newMeal, setNewMeal }) {
  const [name, setName] = useState("");
  const [img_url, setImgUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newMeal = {
      name: name,
      img_url: img_url,
    };

    fetch("/meals", {
      method: "POST",
      body: JSON.stringify(newMeal),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((newMeal) => setNewMeal(newMeal));
  }
  function handleNewPage() {
    setNewFood(!newFood);
    setNewMeal(!newMeal);
  }

  return (
    <div>
      <div>
        <div className="form">
          <form className="" onSubmit={(e) => handleSubmit(e)}>
            <input
              placeholder="Meal Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Meal Picture"
              value={img_url}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <div>
              <button className="centerButtons" type="submit">
                Add Meal
              </button>
              <button
                className="centerButtons"
                type="submit"
                onClick={() => handleNewPage()}
              >
                Add Food Instead
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewMeal;
