import LogoMark from "./LogoMark";

export default function About({ dark }) {
  return (
    <div className="section" id="about">
      <div className="inner">
        <div className="about-layout">

          {/* Left — text content */}
          <div>
            <div className="s-tag">03 — ABOUT ME</div>
            <h2 className="s-title">ABOUT ME</h2>
            <div className="abar"><div className="abar-1"/><div className="abar-2"/></div>
            <p className="s-desc">
              Hi, I'm Wilfred — a data engineer and analyst passionate about building scalable data infrastructure and turning complex datasets into clear, actionable insights.
            </p>

            <div className="about-stats">
              <div><div className="stat-num">5+</div><div className="stat-lbl">Years of Experience</div></div>
              <div><div className="stat-num">30+</div><div className="stat-lbl">Completed Projects</div></div>
              <div><div className="stat-num">15+</div><div className="stat-lbl">Clients Worldwide</div></div>
            </div>

            <div className="about-contacts">
              <div><div className="ct-lbl">Call Today :</div><div className="ct-val">+237 6 53 84 37 85</div></div>
              <div><div className="ct-lbl">Email :</div><div className="ct-val">wilfred@mrdayter.com</div></div>
            </div>

            {/* <div className="socials">
              {["𝕏","in","Be","▲"].map((ic, i) => (
                <a key={i} href="#" className="soc">{ic}</a>
              ))}
            </div> */}
            <div className="socials">
              {[
                { icon: "in", url: "https://www.linkedin.com/in/wilfred-tagha/", label: "LinkedIn" },
                { icon: "f", url: "https://www.facebook.com/MrDayter", label: "Facebook" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* <a href="#contact" className="btn-outline">MY STORY</a> */}
          </div>

          {/* Right — photo/logo card */}
          <div className="about-img">
            <img src="/images/profile.jpg" alt="Mr. Dayter" className="hero-image" />
            {/*
              ── Replace with your photo ──
              <img src="/profile.jpg" alt="Mr. Dayter" />
            */}
            {/* <div className="wordmark">
              <LogoMark dark={dark} size={90} />
              <div className="wm-mr">MR.</div>
              <div className="wm-name">DAYTER</div>
              <div className="wm-tag">Where Data Meets Intelligence</div>
            </div> */}
          </div>

        </div>
      </div>
    </div>
  );
}