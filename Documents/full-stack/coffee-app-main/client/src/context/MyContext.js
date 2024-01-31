import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";

export const MyContext = createContext();

const URL = "https://places.googleapis.com/v1/places:searchNearby";
const textSearchURL = "https://places.googleapis.com/v1/places:searchText";

const API_KEY = "AIzaSyANWsxQFJo4Q1DznbWperqnxelO7UB5bVk";

const headers = {
  "Content-Type": "application/json",
  "X-Goog-Api-Key": "AIzaSyANWsxQFJo4Q1DznbWperqnxelO7UB5bVk",
  "X-Goog-FieldMask": "*",
};

function ContextProvider({ children }) {
  const position = { lat: 53.54992, lng: 10.00678 };
  const [open, setOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(position);
  const [cafes, setCafes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [placePhotos, setPlacePhotos] = useState([]);
  const [query, setQuery] = useState("");

  const getUserLocation = async (query) => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     const { latitude, longitude } = position.coords;
    //     setUserLocation({ lat: latitude, lng: longitude });
    //   });
    // } else {
    //   console.error("Geolocation is not supported by this browser");
    // }
    const data = { textQuery: query };
    try {
      const res = await axios.post(textSearchURL, data, { headers });
      const responseData = res.data;
      console.log("Text Search Result:", responseData.places[0].location);
      setUserLocation({
        lat: responseData.places[0].location.latitude,
        lng: responseData.places[0].location.longitude,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = {
      includedTypes: ["cafe"],
      maxResultCount: 10,
      locationRestriction: {
        circle: {
          center: {
            latitude: userLocation.lat,
            longitude: userLocation.lng,
          },
          radius: 5000.0,
        },
      },
    };
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.post(URL, data, { headers });
        const responseData = res.data;
        setCafes(responseData.places);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Invoke the async function
    setIsLoading(false);
  }, [userLocation]);

  // cafes.length > 0 && cafes.map((cafe) => console.log(cafe.displayName.text));

  // const getPhotos = async (photoName) => {
  //   try {
  //     const photoURL = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=400&key=${API_KEY}&skipHttpRedirect=true`;
  //     const res = await axios.post(photoURL);
  //     const responseData = res.data;
  //     console.log(responseData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Utility function for debouncing
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const debouncedGetPhotos = useCallback(
    debounce((photoName) => {
      getPhotos(photoName);
    }, 10000), // 1000 milliseconds debounce time
    []
  );

  const getPhotos = async (photoName) => {
    try {
      // Use the proxy server for the Google Places API
      const photoURL = `http://localhost:3001/google-api/v1/${photoName}/media?maxHeightPx=400&key=${API_KEY}&skipHttpRedirect=true`;
      const res = await axios.get(photoURL);
      const responseData = res.data;
      setPlacePhotos(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cafes.map((cafe) => getPhotos(cafe.photos[0].name));
  }, [cafes, debouncedGetPhotos]);

  return (
    <MyContext.Provider
      value={{
        open,
        setOpen,
        userLocation,
        setUserLocation,
        getUserLocation,
        cafes,
        setCafes,
        isLoading,
        setIsLoading,
        query,
        setQuery,
        placePhotos,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

function useMapContext() {
  const context = useContext(MyContext);
  if (context === undefined)
    throw new Error("MyContext was used outside the Provider");
  return context;
}

export { ContextProvider, useMapContext };
