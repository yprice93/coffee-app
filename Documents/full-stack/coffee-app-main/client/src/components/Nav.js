import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar  bg-gray-0">
      <Link to="/">
        <div className="logo">
          <img src="/coffee.png" alt="coffe-logo" className="logo" />
        </div>
      </Link>
      <ul className="nav-links">
        {/* <Link to="/">Home</Link> */}
        <li>
          {" "}
          {/* <Link type="button" to="/login" className="btn btn-outline-dark">
            Login
          </Link> */}
        </li>
      </ul>
    </div>
  );
}
