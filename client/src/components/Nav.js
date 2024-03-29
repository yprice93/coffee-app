import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar  bg-gray-100">
      <Link to="/">
        <div className="logo">
          <img src="/coffee.png" alt="coffe-logo" className="logo" />
        </div>
      </Link>
      <ul className="nav-links">
        {/* <Link to="/">Home</Link> */}
        <li>
          {" "}
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
