// import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="nav-wrapper">
      <nav className="navbar">
        <div className="logo">BLCKS</div>

        <ul className="nav-links">
          <li>Platform</li>
          <li>Solutions</li>
          <li><Link to="/builder" style={{ textDecoration: "none", color: "inherit" }}>Live[test]</Link></li>
          <li><Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>About Me</Link></li>
        </ul>

        <div className="nav-right">
          <button className="link-btn">Log in</button>
          <button className="link-btn">Sign up</button>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;