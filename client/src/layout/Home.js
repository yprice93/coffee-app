import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use navigate function to go to the desired page
    navigate("/main");
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h1>But First, Coffee</h1>
        <button onClick={handleButtonClick}>Start your coffee journey</button>
      </div>
    </div>
  );
}
