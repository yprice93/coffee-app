import {
  APIProvider,
  InfoWindow,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";

const API_KEY = "AIzaSyANWsxQFJo4Q1DznbWperqnxelO7UB5bVk";

// window.initMap = initMap;

export default function CafeMap() {
  const position = { lat: 53.54992, lng: 10.00678 };
  const [userLocation, setUserLocation] = useState(position);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      });
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  const [open, setOpen] = useState(false);
  return (
    <APIProvider apiKey={API_KEY}>
      <Map center={userLocation} zoom={10}>
        <Marker position={userLocation} onClick={() => setOpen(true)} />
        {open && (
          <InfoWindow
            position={userLocation}
            onCloseClick={() => setOpen(false)}
          >
            <p>Your Location</p>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
}
