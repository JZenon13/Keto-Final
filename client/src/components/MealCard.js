import React, { useState } from "react";
import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard";

function MealCard({ meal, user, setDeleteItem }) {
  const [oneReview, setOneReview] = useState(false);
  const [loadReview, setLoadReview] = useState([]);
  const [addReview, setAddReview] = useState(false);
  const handleClick = (id) => {
    setOneReview(!oneReview);
    fetch(`/meals/${id}`)
      .then((res) => res.json())
      .then((data) => setLoadReview(data));
  };

  const handleReviews = () => {
    setAddReview(!addReview);
  };

  const handleDelete = (id) => {
    fetch(`/meals/${id}`, {
      method: "DELETE",
    }).then((a) => setDeleteItem(a));
  };
  return (
    <div>
      <>
        <div key={meal.name} className="itemBox">
          <h2>{meal.name}</h2>
          <button className="reviewButton" onClick={() => handleClick(meal.id)}>
            See Reviews
          </button>
          <button className="reviewButton" onClick={() => handleReviews()}>
            Add Review
          </button>
          <button
            className="emoji-button delete"
            onClick={() => handleDelete(meal.id)}
          >
            🗑
          </button>
          <img src={meal.img_url} alt="item"></img>
        </div>
        <div>
          <div>{oneReview ? <ReviewCard loadReview={loadReview} /> : null}</div>
          <div>
            {addReview ? (
              <AddReview user={user} mealName={meal.name} mealId={meal.id} />
            ) : null}
          </div>
        </div>
      </>
    </div>
  );
}

export default MealCard;
