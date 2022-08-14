import React from "react";

function AddMeal({ newMealItems }) {
  return (
    <div className="centerButtons">
      <table>
        <tr>
          <th>Food</th>
          <th>Carbs</th>
          <th>Category</th>
          <th>Vegan</th>
        </tr>

        {[...newMealItems].map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.carbs}</td>
              <td>{item.category}</td>
              <td>{item.vegan.toString()}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default AddMeal;
