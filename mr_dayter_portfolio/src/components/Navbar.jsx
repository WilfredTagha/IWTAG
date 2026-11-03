import { useState } from "react";
import LogoMark from "./LogoMark";

export default function Navbar({ dark, isWhoAmI = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const homeLinks = (
    <>
      <a href="#services" onClick={closeMenu}>Services</a>
      <a href="#about" onClick={closeMenu}>About</a>
      <a href="#testimonials" onClick={closeMenu}>Work</a>
      <a href="/who_am_i" onClick={closeMenu}>Who am I</a>
    </>
  );

  const profileLinks = (
    <>
      <a href="/" onClick={closeMenu}>Portfolio</a>
      <a href="#case" onClick={closeMenu}>The case</a>
      <a href="#record" onClick={closeMenu}>The record</a>
      <a href="#experience" onClick={closeMenu}>Experience</a>
    </>
  );

  return (
    <>
      <nav className="navbar" aria-label="Primary navigation">
        <a href="/" className={`nav-avatar${dark ? " nav-avatar-dark" : ""}`} aria-label="Mr Dayter home">
          <LogoMark dark={dark} size={34} />
        </a>
        <div className="nav-links">{isWhoAmI ? profileLinks : homeLinks}</div>
        <a href={isWhoAmI ? "/documents/Wilfred_Njeunwi_Tagha_CV.pdf" : "#contact"} className="nav-cta">
          {isWhoAmI ? "Download CV" : "Contact"}
        </a>
      </nav>

      <button
        className={`mobile-fab hamburger${menuOpen ? " active" : ""}`}
        onClick={() => setMenuOpen((value) => !value)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className="mobile-menu-dropdown">
          {isWhoAmI ? profileLinks : homeLinks}
          <a href={isWhoAmI ? "/documents/Wilfred_Njeunwi_Tagha_CV.pdf" : "#contact"} className="mobile-cta" onClick={closeMenu}>
            {isWhoAmI ? "Download CV" : "Contact"}
          </a>
        </div>
      )}
    </>
  );
}
