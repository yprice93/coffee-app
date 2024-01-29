export default function CafeItem({ cafe }) {
  console.log(cafe.location.latitude, cafe.location.longitude);
  return (
    <div class="card mb-1">
      {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
      <div class="card-body">
        <h5 class="card-title">{cafe.displayName.text}</h5>
        <p class="card-text">{cafe.shortFormattedAddress}</p>
        {/* <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p> */}
      </div>
    </div>
  );
}
