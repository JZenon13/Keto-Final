import React, { useState, useEffect } from "react";

function AddReview({ user, mealName, mealId }) {
  const [allReviews, setAllReviews] = useState([]);
  const [newReviews, setNewReview] = useState([]);
  const [rating, setRating] = useState(0);
  const [blurb, setBlurb] = useState("");

  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, [newReviews]);

  function handleSubmit(e) {
    e.preventDefault();

    const newReview = {
      user_id: user.id,
      meal_id: mealId,
      rating: rating,
      blurb: blurb,
    };
    console.log(newReview);

    fetch("/reviews", {
      method: "POST",
      body: JSON.stringify(newReview),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((newReview) => setNewReview(newReview));
  }

  return (
    <div>
      <div className="form">
        <form className="" onSubmit={() => handleSubmit()}>
          <input placeholder={`${user.username}`} value={user.username} />
          <input placeholder="Meal Name" value={mealName} />
          <input
            placeholder="0"
            type="number"
            min="0"
            max="10"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <textarea
            placeholder="Yucky, Yummy or Nah"
            rows={3}
            value={blurb}
            onChange={(e) => setBlurb(e.target.value)}
          />
          <div>
            <button className="centerButtons" type="submit">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddReview;
