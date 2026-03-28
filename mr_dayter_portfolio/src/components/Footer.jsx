import LogoMark from "./LogoMark";

export default function Footer({ dark }) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        {/*
          Disc background switches with mode:
          - Light mode: white disc  → blue logo sits on white ✓
          - Dark mode:  dark disc   → orange logo sits on dark ✓
        */}
        <div className={`footer-logo-wrap${dark ? " footer-logo-wrap-dark" : ""}`}>
          <LogoMark dark={dark} size={40} />
        </div>
        <div>
          <div className="fw-mr">MR.</div>
          <div className="fw-name">DAYTER</div>
          <div className="fw-tag">Where Data Meets Intelligence.</div>
        </div>
      </div>
      <div className="footer-copy">© 2025 Wilfred Njeunwi Tagha · All rights reserved</div>
    </footer>
  );
}