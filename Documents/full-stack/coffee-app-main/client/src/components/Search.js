import { useEffect, useState } from "react";
import { useMapContext } from "../context/MyContext";

export default function Search() {
  const { query, setQuery, getUserLocation } = useMapContext();
  const [input, setInput] = useState();

  const handleClick = () => {
    getUserLocation(input);
  };

  return (
    <div className="input-group mb-0">
      <input
        type="text"
        className="form-control"
        placeholder="Search Location"
        aria-label="location"
        aria-describedby="basic-addon2"
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}
