import { useState } from "react";
import LogoMark from "./LogoMark";

const SVCS = [
  { label: "1. DATA ENGINEERING",    items: ["ETL/ELT pipeline design & build", "Data warehouse architecture (Snowflake, BigQuery)", "Real-time streaming with Kafka & Spark", "Data quality frameworks & monitoring"] },
  { label: "2. DATA ANALYTICS",      items: ["Dashboard design in Power BI & Tableau", "SQL & Python-based reporting", "KPI strategy and metric definition", "Self-service analytics enablement"] },
  { label: "3. DATA STRATEGY",       items: ["Data maturity assessments", "Governance frameworks & data cataloging", "Cloud migration planning (AWS, GCP, Azure)", "Team upskilling & training"] },
  { label: "4. AI & ML INTEGRATION", items: ["Feature engineering for ML models", "MLOps pipelines and model serving", "LLM integration and RAG systems", "Predictive analytics solutions"] },
];

const Chev = () => (
  <svg className="svc-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 15l-6-6-6 6"/>
  </svg>
);
const Check = () => (
  <svg className="svc-bullet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
  </svg>
);

export default function Services({ dark }) {
  const [open, setOpen] = useState(0);

  // return (
  //   <div className="section" id="services">
  //     <div className="inner">
  //       <div className="s-tag">02 — SERVICES</div>
  //       <h2 className="s-title">WHAT I CAN DO FOR YOU</h2>
  //       <div className="abar"><div className="abar-1"/><div className="abar-2"/></div>
  //       <p className="s-desc">As a data engineer and analyst, I transform raw data into strategic assets — building the systems and insights that drive real decisions.</p>

  //       <div className="svc-layout">
  //         {/* Accordion list */}
  //         <div className="svc-list">
  //           {SVCS.map((s, i) => (
  //             <div key={i} className={`svc-item${open === i ? " open" : ""}`} onClick={() => setOpen(open === i ? -1 : i)}>
  //               <div className="svc-hd">
  //                 <span className="svc-label">{s.label}</span>
  //                 <Chev />
  //               </div>
  //               <div className="svc-body">
  //                 <div className="svc-bullets">
  //                   {s.items.map((it, j) => (
  //                     <div key={j} className="svc-bullet"><Check />{it}</div>
  //                   ))}
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>

  //         {/* Right visual — replace with a real image if desired */}
  //         <div className="svc-visual">
  //           <div className="svc-visual-placeholder">
  //             <div className="wordmark">
  //               <LogoMark dark={dark} size={70} />
  //               <div className="wm-mr">MR.</div>
  //               <div className="wm-name" style={{ fontSize: 20 }}>DAYTER</div>
  //               <div className="wm-tag">Data · Analytics · AI</div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
return (
  <div className="section" id="services">
    <div className="inner">
      <div className="svc-layout">

        {/* LEFT — heading + accordion */}
        <div>
          <div className="s-tag">02 — SERVICES</div>
          <h2 className="s-title">WHAT I CAN DO FOR YOU</h2>
          <div className="abar"><div className="abar-1"/><div className="abar-2"/></div>
          <p className="s-desc">As a data engineer and analyst, I transform raw data into strategic assets — building the systems and insights that drive real decisions.</p>

          <div className="svc-list" style={{ marginTop: 36 }}>
            {SVCS.map((s, i) => (
              <div key={i} className={`svc-item${open === i ? " open" : ""}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <div className="svc-hd">
                  <span className="svc-label">{s.label}</span>
                  <Chev />
                </div>
                <div className="svc-body">
                  <div className="svc-bullets">
                    {s.items.map((it, j) => (
                      <div key={j} className="svc-bullet"><Check />{it}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — visual card alone */}
        <div className="svc-visual">
          <div className="svc-visual-placeholder">
            <div className="wordmark">
              <LogoMark dark={dark} size={70} />
              <div className="wm-name" style={{ fontSize: 20 }}>MR.</div>
              <div className="wm-name" style={{ fontSize: 20 }}>DAYTER</div>
              <div className="wm-tag">Data · Analytics · AI</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

}