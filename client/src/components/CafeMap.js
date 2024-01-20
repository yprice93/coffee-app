import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
const API_KEY = "AIzaSyANWsxQFJo4Q1DznbWperqnxelO7UB5bVk";

export default function CafeMap() {
  const position = { lat: 53.54992, lng: 10.00678 };
  return (
    <APIProvider apiKey={API_KEY}>
      <Map center={position} zoom={10} />
    </APIProvider>
  );
}
