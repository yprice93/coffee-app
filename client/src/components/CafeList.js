import { useMapContext } from "../context/MyContext";

export default function CafeList() {
  const { cafes } = useMapContext();

  return (
    <div className="cafelist-parent">
      {cafes.length > 0 &&
        cafes.map((cafe) => <div>{cafe.displayName.text}</div>)}
    </div>
  );
}
