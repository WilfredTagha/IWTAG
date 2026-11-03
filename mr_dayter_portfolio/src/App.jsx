import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhoAmI from "./components/WhoAmI";
import "./styles.css";

export default function App() {
  const [dark, setDark] = useState(true);
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const isWhoAmI = path === "/who_am_i" || path === "/who-am-i";

  useEffect(() => {
    document.title = isWhoAmI
      ? "Who I Am | Wilfred Njeunwi Tagha"
      : "Mr. Dayter | Data Engineer, Builder and Community Leader";
  }, [isWhoAmI]);

  return (
    <div className={`app${dark ? " dark" : ""}`}>
      <Navbar dark={dark} isWhoAmI={isWhoAmI} />
      {isWhoAmI ? (
        <WhoAmI />
      ) : (
        <main>
          <Hero dark={dark} />
          <Services dark={dark} />
          <About dark={dark} />
          <Testimonials dark={dark} />
          <FAQ dark={dark} />
          <Contact dark={dark} />
        </main>
      )}
      <Footer dark={dark} />
      <div className="float-toggle">
        <button
          className={`tog-pill${dark ? " on" : ""}`}
          onClick={() => setDark((value) => !value)}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <div className="tog-knob" />
        </button>
      </div>
    </div>
  );
}
