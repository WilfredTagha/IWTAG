import { useState } from "react";
import LogoMark from "./LogoMark";

export default function Navbar({ dark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/*
          Avatar disc:
          - Dark mode  → orange logo on dark disc (brand: orange circle on dark bg)
          - Light mode → blue logo on white disc  (brand: blue circle on white bg)
        */}
        <div className={`nav-avatar${dark ? " nav-avatar-dark" : ""}`}>
          {/* Replace with: <img src="/profile.jpg" alt="Mr. Dayter" /> */}
          <LogoMark dark={dark} size={34} />
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Projects</a>
          <a href="#faq">Blogs</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger${menuOpen ? " active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a href="#contact" className="nav-cta">Contact</a>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-menu-dropdown">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Projects</a>
          <a href="#faq" onClick={closeMenu}>Blogs</a>
          <a href="#contact" className="mobile-cta" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </>
  );
}