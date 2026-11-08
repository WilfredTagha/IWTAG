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
import Manifesto from "./components/Manifesto";
import "./styles.css";

export default function App() {
  const [dark, setDark] = useState(true);
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const isWhoAmI = path === "/who_am_i" || path === "/who-am-i";
  const isManifesto = path === "/manifesto" || path === "/auditor-general";

  useEffect(() => {
    document.title = isManifesto
      ? "Manifesto for Auditor General | Wilfred Njeunwi Tagha"
      : isWhoAmI
        ? "Who I Am | Wilfred Njeunwi Tagha"
        : "Mr. Dayter | Data Engineer, Builder and Community Leader";

    const description = isManifesto
      ? "Wilfred Njeunwi Tagha's manifesto for an accountable, independent and accessible Office of the Auditor General at CMU Africa."
      : "Wilfred Njeunwi Tagha is a software engineer, data analyst and community leader who builds practical systems and serves people.";
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [isWhoAmI, isManifesto]);

  return (
    <div className={`app${dark && !isManifesto ? " dark" : ""}${isManifesto ? " manifesto-app" : ""}`}>
      {!isManifesto && <Navbar dark={dark} isWhoAmI={isWhoAmI} />}
      {isManifesto ? (
        <Manifesto />
      ) : isWhoAmI ? (
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
      {!isManifesto && <Footer dark={dark} />}
      {!isManifesto && (
        <div className="float-toggle">
          <button
            className={`tog-pill${dark ? " on" : ""}`}
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className="tog-knob" />
          </button>
        </div>
      )}
    </div>
  );
}
