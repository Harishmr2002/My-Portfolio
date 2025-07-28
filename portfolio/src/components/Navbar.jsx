import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close menu on resize to desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Harish.dev</div>

      {isMobile ? (
        <>
          <div className="hamburger" onClick={toggleMenu}>☰</div>
          {menuOpen && (
            <div className="navbar-links mobile">
              <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</NavLink>
              <NavLink to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</NavLink>
              <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </div>
          )}
        </>
      ) : (
        <div className="navbar-links desktop">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
