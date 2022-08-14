import React, { useState } from "react";

function AddFood({
  handleNewPage,
  setNewFood,
  setNewMeal,
  newFood,
  newMeal,
  setNewFoodItem,
}) {
  const [carbs, setCarbs] = useState([]);
  const [name, setName] = useState([]);
  const [vegan, setVegan] = useState([]);
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState([]);
  const [img_url, setImgUrl] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      carbs: carbs,
      img_url: img_url,
      name: name,
      vegan: vegan,
      category: category,
      description: description,
    };

    fetch("/items", {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((newItem) => setNewFoodItem(newItem));
  }
  function handleNewPage() {
    setNewFood(!newFood);
    setNewMeal(!newMeal);
  }
  return (
    <div>
      <div>
        <div>
          <div className="form">
            <form className="" onSubmit={(e) => handleSubmit(e)}>
              <input
                placeholder="Carbs"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
              />
              <input
                placeholder="Picture"
                value={img_url}
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div>
                <div>
                  <input
                    type="radio"
                    value="Vegan"
                    onChange={() => setVegan(true)}
                    checked={vegan}
                  />
                  <label>Vegan</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="Not Vegan"
                    onChange={() => setVegan(false)}
                    checked={!vegan}
                  />
                  <label>Not Vegan</label>
                </div>
              </div>

              <select
                name="foodCat"
                id="foodCat"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
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
              <br></br>
              <textarea
                placeholder="Description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div>
                <button className="centerButtons" type="submit">
                  Add Food
                </button>
                <button
                  className="centerButtons"
                  type="submit"
                  onClick={() => handleNewPage()}
                >
                  Add Meal Instead
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFood;
