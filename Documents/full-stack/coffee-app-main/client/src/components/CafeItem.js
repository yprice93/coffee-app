import { useMapContext } from "../context/MyContext";
import StarRating from "./StarRating";

export default function CafeItem({ cafe }) {
  const { placePhotos } = useMapContext();
  return (
    <div class="card mb-0">
      {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
      <div class="card-body">
        <h5 class="card-title">{cafe.displayName.text}</h5>
        <p class="card-text">{cafe.shortFormattedAddress}</p>
        <StarRating />

        {/* <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p> */}
      </div>
    </div>
  );
}
