import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use navigate function to go to the desired page
    navigate("/main");
  };

  return (
    <div className="home-parent">
      <div className="home-child">
        <h1>But First, Coffee ☕️</h1>
        <button
          onClick={handleButtonClick}
          className="bg-yellow-100 hover:bg-orange-200 text-gray-800 font-semibold py-2 px-4 border border-orange-400 rounded shadow"
        >
          Start your coffee journey
        </button>
      </div>
    </div>
  );
}
