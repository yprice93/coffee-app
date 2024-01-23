import { useEffect, useState } from "react";

const url =
  "http://localhost:5000/api/maps/api/place/nearbysearch/json?type=cafe&key=";

const API_KEY = "AIzaSyANWsxQFJo4Q1DznbWperqnxelO7UB5bVk";

export default function CafeList() {
  const [places, setPlaces] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + API_KEY);
        const newData = await response.json();
        console.log(newData);
        // setPlaces(newData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="cafelist-parent">
      <h1>This is cafe list</h1>
    </div>
  );
}
