import CafeList from "../components/CafeList";
import CafeMap from "../components/CafeMap";
import Search from "../components/Search";

// const URL = "https://places.googleapis.com/v1/places:searchNearby";

// const headers = {
//   "Content-Type": "application/json",
//   "X-Goog-Api-Key": "AIzaSyANWsxQFJo4Q1DznbWperqnxelO7UB5bVk",
//   "X-Goog-FieldMask": "places.displayName",
// };

export default function Main() {
  // const { userLocation } = useMapContext();
  // const [cafes, setCafes] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // console.log(userLocation.lat, userLocation.lng);

  // useEffect(() => {
  //   const data = {
  //     includedTypes: ["cafe"],
  //     maxResultCount: 10,
  //     locationRestriction: {
  //       circle: {
  //         center: {
  //           latitude: userLocation.lat,
  //           longitude: userLocation.lng,
  //         },
  //         radius: 5000.0,
  //       },
  //     },
  //   };
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const res = await axios.post(URL, data, { headers });
  //       const responseData = res.data;
  //       setCafes(responseData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData(); // Invoke the async function
  //   setIsLoading(false);
  // }, [userLocation]);

  return (
    <>
      <Search />
      <div className="main-parent">
        <CafeList />
        <CafeMap />
      </div>
    </>
  );
}
