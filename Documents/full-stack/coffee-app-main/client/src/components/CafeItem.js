import { useState } from "react";
import ReactStars from "react-rating-stars-component";

export default function CafeItem({ cafe }) {
  const [rating, setRating] = useState(0);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div class="card mb-0">
      {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
      <div class="card-body">
        <h5 class="card-title">{cafe.displayName.text}</h5>
        <p class="card-text">{cafe.shortFormattedAddress}</p>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          value={rating}
        />

        {/* <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p> */}
      </div>
    </div>
  );
}
