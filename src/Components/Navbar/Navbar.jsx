// import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="nav-wrapper">
      <nav className="navbar">
        <div className="logo">BLCKS</div>

        <ul className="nav-links">
          <li>Platform</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>About me</li>
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