import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Harish.dev</div>
      <div className="navbar-links">
        <NavLink exact="true" to="/" className="nav-link" activeclassname="active">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeclassname="active">About</NavLink>
        <NavLink to="/projects" className="nav-link" activeclassname="active">Projects</NavLink>
        <NavLink to="/contact" className="nav-link" activeclassname="active">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
