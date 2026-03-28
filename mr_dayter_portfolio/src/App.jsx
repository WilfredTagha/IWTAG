import { useState } from "react";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import Services      from "./components/Services";
import About         from "./components/About";
import Testimonials  from "./components/Testimonials";
import FAQ           from "./components/FAQ";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";
import "./styles.css";

export default function App() {
  const [dark, setDark] = useState(true);

  // .dark on the root div — CSS vars cascade down from here to EVERY element
  return (
    <div className={`app${dark ? " dark" : ""}`}>

      <Navbar dark={dark} />

      <main>
        <Hero         dark={dark} />
        <Services     dark={dark} />
        <About        dark={dark} />
        <Testimonials dark={dark} />
        <FAQ          dark={dark} />
        <Contact      dark={dark} />
      </main>

      <Footer dark={dark} />

      <div className="float-toggle">
        <button
          className={`tog-pill${dark ? " on" : ""}`}
          onClick={() => setDark(d => !d)}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <div className="tog-knob" />
        </button>
      </div>

    </div>
  );
}