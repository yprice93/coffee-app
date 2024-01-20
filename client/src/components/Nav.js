import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">☕️</div>
      </Link>
      <ul className="nav-links">
        {/* <Link to="/">Home</Link> */}
        <Link to="/login">Login</Link>
      </ul>
    </div>
  );
}
