import { useState, useEffect } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);

  return (
    <div>
      {[...Array(totalStars)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index} htmlFor={`star-${currentRating}`}>
            <input
              type="radio"
              id={`star-${currentRating}`}
              name="rating"
              value={currentRating}
              onChange={() => setRating(currentRating)}
            />
            <span
              className="star"
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
}
