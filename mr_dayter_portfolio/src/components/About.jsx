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
              Hi, I'm Wilfred — a software engineer from Buea, Cameroon, specialising in data engineering and analytics. I build pipelines, automate reporting, and turn raw data into decisions that actually get made. BSc Software Engineering, University of Buea.
            </p>

            <div className="about-stats">
              <div><div className="stat-num">3+</div><div className="stat-lbl">Years in Data & Engineering</div></div>
              <div><div className="stat-num">80%</div><div className="stat-lbl">Reporting Time Reduced at SYNDATECH</div></div>
              <div><div className="stat-num">5+</div><div className="stat-lbl">Systems Shipped</div></div>
            </div>

            <div className="about-contacts">
              <div><div className="ct-lbl">Call Today :</div><div className="ct-val">+237 6 53 84 37 85</div></div>
              <div><div className="ct-lbl">Email :</div><div className="ct-val">wilfred@mrdayter.com</div></div>
            </div>

            <div className="socials">
              {[
                { icon: "in", url: "https://www.linkedin.com/in/wilfredtagha", label: "LinkedIn" },
                { icon: "f", url: "https://www.facebook.com/MrDayter", label: "Facebook" },
                { icon: "gh", url: "https://github.com/tagha-wilfred", label: "GitHub" }
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