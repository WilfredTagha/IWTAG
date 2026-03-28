import LogoMark from "./LogoMark";

export default function Hero({ dark }) {
  return (
    <div className="hero" id="home">
      <div className="hero-grid">

        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-name">WILFRED N. TAGHA</div>
          <div className="hero-dot" />
          <div className="hero-title">DATA</div>
        </div>

        {/* CENTER — image card */}
        <div className="hero-center">
        
          
          <div className="hero-card">
            <img src="/images/profile.jpg" alt="Mr. Dayter" className="hero-image" />
            {/* <div className="hero-placeholder"> */}
              {/* <div className="wordmark"> */}
                {/* <LogoMark dark={dark} size={80} /> */}
                {/* <div className="wm-mr">MR.</div> */}
                {/* <div className="wm-name">DAYTER</div> */}
                {/* <div className="wm-tag">Where Data Meets Intelligence</div> */}
              {/* </div> */}
            {/* </div> */}
            <div className="hero-badge">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C10.343 2 9 3.343 9 5c0 .552.448 1 1 1s1-.448 1-1c0-.552.448-1 1-1s1 .448 1 1c0 .552.448 1 1 1s1-.448 1-1C15 3.343 13.657 2 12 2zM8.5 7C7.672 7 7 7.672 7 8.5V17c0 2.21 1.79 4 4 4h2c2.21 0 4-1.79 4-4V8.5C17 7.672 16.328 7 15.5 7H8.5z"/>
              </svg>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-title">ENGINEER</div>
          <div className="hero-desc">
            I'm a Cameroon-born data engineer and analyst, building intelligent pipelines and impactful data products.
          </div>
        </div>

      </div>
    </div>
  );
}