import React from "react";
function ReviewCard({ loadReview }) {
  const reviewStuff = loadReview.reviews?.map((review) => {
    return (
      <div key={review.id}>
        <h4 classname="descriptionText">Rating: {review.rating}</h4>
        <p classname="descriptionText">About: {review.blurb}</p>
      </div>
    );
  });

  return <div className="itemBox">{reviewStuff}</div>;
}

export default ReviewCard;
