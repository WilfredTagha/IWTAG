import LogoMark from "./LogoMark";

export default function Navbar({ dark }) {
  return (
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

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Projects</a>
        <a href="#faq">Blogs</a>
      </div>

      <a href="#contact" className="nav-cta">Contact</a>
    </nav>
  );
}