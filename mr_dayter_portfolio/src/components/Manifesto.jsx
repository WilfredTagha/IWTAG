import { useEffect, useMemo, useRef, useState } from "react";
import "./Manifesto.css";

const concernStages = [
  {
    number: "01",
    short: "Raise",
    title: "Raise the concern",
    status: "Submitted",
    owner: "Student",
    description: "A student describes the issue, chooses a category and adds any useful evidence.",
    student: "A private submission, an immediate case reference and a record they can return to.",
    office: "The system records the concern exactly as submitted and protects sensitive details.",
  },
  {
    number: "02",
    short: "Record",
    title: "Create a traceable case",
    status: "Recorded",
    owner: "Auditor General Office",
    description: "The concern becomes a case with a reference number, time stamp and visible history.",
    student: "One case page showing when the concern arrived and every update made afterward.",
    office: "A complete audit trail that prevents complaints from being lost, rewritten or quietly forgotten.",
  },
  {
    number: "03",
    short: "Assign",
    title: "Route it to responsibility",
    status: "Assigned",
    owner: "Named responsible office",
    description: "The office reviews the issue and assigns it to the person or body responsible for action.",
    student: "The responsible office, the next action and the reason for the assignment.",
    office: "Clear ownership, internal notes and escalation when responsibility is disputed or delayed.",
  },
  {
    number: "04",
    short: "Track",
    title: "Make progress visible",
    status: "In progress",
    owner: "Responsible office and OAG",
    description: "Updates are added as evidence is requested, action is taken or another office must respond.",
    student: "A live status, plain-language updates and a timeline of what has happened so far.",
    office: "Follow-up reminders, evidence requests and a clear record of pending action.",
  },
  {
    number: "05",
    short: "Resolve",
    title: "Close with an explanation",
    status: "Resolved",
    owner: "Auditor General Office",
    description: "The case closes only with an outcome, the supporting reason and any recommendation that remains open.",
    student: "A resolution they can read, a record they can keep and clarity on any next step.",
    office: "A reusable institutional lesson and evidence for future performance or process reviews.",
  },
];

const auditItems = [
  { label: "Income", detail: "What came in and when it was recorded", icon: "↓" },
  { label: "Expenditure", detail: "What was spent, approved and supported", icon: "↑" },
  { label: "Missing evidence", detail: "Receipts, approvals or records still required", icon: "?" },
  { label: "Process controls", detail: "Rules followed, bypassed or needing enforcement", icon: "↻" },
  { label: "Risks", detail: "Financial and operational exposure students should know", icon: "!" },
  { label: "Recommendations", detail: "Named corrective action and follow-up status", icon: "✓" },
];

const commitments = [
  {
    index: "01",
    title: "Monthly financial accountability",
    text: "Publish a clear audit for every reporting month and carry unresolved corrective actions into the next review.",
  },
  {
    index: "02",
    title: "A visible complaint process",
    text: "Give every accepted concern a case, an owner, a status history and an explained outcome.",
  },
  {
    index: "03",
    title: "Performance backed by evidence",
    text: "Compare Guild responsibilities and promises with records that students can examine, not political impressions.",
  },
  {
    index: "04",
    title: "Fair hearings",
    text: "Hear every affected party, disclose conflicts of interest and record the reasons behind findings and referrals.",
  },
  {
    index: "05",
    title: "Credible elections",
    text: "Publish rules before campaigning, apply them consistently and document how disputes are decided.",
  },
  {
    index: "06",
    title: "An office that continues",
    text: "Leave organised records, reusable procedures and a complete handover instead of making the next office restart.",
  },
];

const yearPlan = [
  ["Opening month", "Set up the working committee, case channels, audit calendar, privacy rules and performance register."],
  ["Every month", "Review transactions, publish the audit and explanation, then track every corrective action."],
  ["Each academic period", "Review delivery evidence, report recurring issues and hold student listening sessions."],
  ["Before elections", "Publish the rules, responsibilities, complaint route and verification process."],
  ["Before handover", "Issue the annual combined report and transfer open cases, recommendations and procedures."],
];

function StatusPill({ status }) {
  return <span className={`mf-status mf-status-${status.toLowerCase().replaceAll(" ", "-")}`}>{status}</span>;
}

function StageVisual({ stage, concern }) {
  if (stage === 0) {
    return (
      <div className="mf-visual mf-form-visual" aria-label="Concern submission form illustration">
        <div className="mf-window-bar"><i /><i /><i /><span>Student concern form</span></div>
        <div className="mf-form-field"><small>Category</small><strong>Guild process and records</strong></div>
        <div className="mf-form-field mf-form-message"><small>What happened</small><p>{concern}</p><span className="mf-typing-caret" /></div>
        <div className="mf-attachment"><span>＋</span> Add supporting evidence</div>
        <div className="mf-submit-row"><span>Private by default</span><button type="button">Submit concern <b>→</b></button></div>
      </div>
    );
  }

  if (stage === 1) {
    return (
      <div className="mf-visual mf-ticket-visual" aria-label="Trackable case record illustration">
        <div className="mf-ticket-paper mf-ticket-back" />
        <div className="mf-ticket-paper">
          <div className="mf-ticket-head"><span>CASE RECEIPT</span><StatusPill status="Recorded" /></div>
          <strong className="mf-case-id">OAG-27-014</strong>
          <p>{concern}</p>
          <div className="mf-ticket-meta"><span>Created now</span><span>History started</span></div>
          <div className="mf-barcode" aria-hidden="true" />
        </div>
        <div className="mf-record-pulse"><span>✓</span> Record secured</div>
      </div>
    );
  }

  if (stage === 2) {
    return (
      <div className="mf-visual mf-route-visual" aria-label="Concern assignment illustration">
        <div className="mf-route-source"><span>OAG-27-014</span><strong>Needs action</strong></div>
        <svg className="mf-route-lines" viewBox="0 0 520 250" aria-hidden="true">
          <path d="M130 125 C220 125 220 50 320 50" />
          <path className="is-active" d="M130 125 C230 125 220 125 320 125" />
          <path d="M130 125 C220 125 220 200 320 200" />
          <circle className="route-dot" cx="290" cy="125" r="6" />
        </svg>
        <div className="mf-route-targets">
          <div><i>FM</i><span><small>Finance Minister</small><b>Records</b></span></div>
          <div className="is-selected"><i>SA</i><span><small>Student Affairs</small><b>Responsible office</b></span><em>Assigned</em></div>
          <div><i>GC</i><span><small>Guild Council</small><b>Response</b></span></div>
        </div>
      </div>
    );
  }

  if (stage === 3) {
    return (
      <div className="mf-visual mf-tracker-visual" aria-label="Live concern status illustration">
        <div className="mf-tracker-head"><div><small>CASE OAG-27-014</small><strong>Concern tracker</strong></div><StatusPill status="In progress" /></div>
        <div className="mf-progress-track"><span /><span /><span /><span /><span /></div>
        <div className="mf-progress-labels"><span>Raised</span><span>Recorded</span><span>Assigned</span><span>Action</span><span>Resolved</span></div>
        <div className="mf-update-feed">
          <div><time>09:14</time><span><b>Assigned to Student Affairs</b><small>Responsibility confirmed by the OAG.</small></span></div>
          <div><time>11:40</time><span><b>Supporting record requested</b><small>The responsible office is preparing a response.</small></span></div>
          <div className="is-latest"><time>Now</time><span><b>Status updated</b><small>You can see this update from your case page.</small></span></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mf-visual mf-resolve-visual" aria-label="Resolved concern illustration">
      <div className="mf-resolve-mark"><span>✓</span><i /><i /></div>
      <small>CASE OAG-27-014</small>
      <h3>Resolved with a recorded explanation</h3>
      <p>The missing record was provided, the process owner was identified and the corrective step was logged for the next audit review.</p>
      <div className="mf-resolution-meta"><span><b>Outcome</b>Visible to student</span><span><b>Record</b>Kept for follow-up</span></div>
    </div>
  );
}

function AuditDocument() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % auditItems.length), 2300);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="mf-audit-demo" aria-label="Animated expanded audit report illustration">
      <div className="mf-audit-shadow mf-audit-shadow-two" />
      <div className="mf-audit-shadow mf-audit-shadow-one" />
      <div className="mf-audit-paper">
        <div className="mf-audit-paper-head"><span>MONTHLY AUDIT</span><b>OAG / 04</b></div>
        <h3>More than totals</h3>
        <div className="mf-audit-grid">
          {auditItems.map((item, index) => (
            <button className={index === active ? "is-active" : ""} key={item.label} onClick={() => setActive(index)} type="button">
              <i>{item.icon}</i><span><b>{item.label}</b><small>{item.detail}</small></span>
            </button>
          ))}
        </div>
        <div className="mf-audit-finding">
          <span>Finding {String(active + 1).padStart(2, "0")}</span>
          <p>{auditItems[active].detail}. The report names the evidence, risk, responsible owner and next action.</p>
        </div>
      </div>
    </div>
  );
}

export default function Manifesto() {
  const [activeStage, setActiveStage] = useState(0);
  const [concern, setConcern] = useState("A published activity report is missing the documents that explain the decision.");
  const [demoConcern, setDemoConcern] = useState(concern);
  const [paused, setPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => setActiveStage((value) => (value + 1) % concernStages.length), 5200);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;
    const elements = pageRef.current?.querySelectorAll("[data-reveal]") || [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const targetId = new URLSearchParams(window.location.search).get("section") || window.location.hash.slice(1);
    if (!targetId) return undefined;
    const timer = window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (!target) return;
      target.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
      window.scrollTo({ top: Math.max(0, target.offsetTop - 84), behavior: "auto" });
    }, 420);
    return () => window.clearTimeout(timer);
  }, []);

  const stage = concernStages[activeStage];
  const stageProgress = useMemo(() => `${((activeStage + 1) / concernStages.length) * 100}%`, [activeStage]);
  const closeMenu = () => setMenuOpen(false);
  const previewConcern = (event) => {
    event.preventDefault();
    const trimmed = concern.trim();
    if (!trimmed) return;
    setDemoConcern(trimmed);
    setActiveStage(0);
    setPaused(false);
    document.querySelector("#concern-journey")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="manifesto-page" ref={pageRef}>
      <nav className="mf-nav" aria-label="Manifesto navigation">
        <a className="mf-brand" href="#top" aria-label="Manifesto home"><span>W</span><b>WILFRED</b><small>AUDITOR GENERAL</small></a>
        <div className={`mf-nav-links${menuOpen ? " is-open" : ""}`}>
          <a href="#concern-journey" onClick={closeMenu}>The system</a>
          <a href="#audits" onClick={closeMenu}>Audits</a>
          <a href="#commitments" onClick={closeMenu}>Commitments</a>
          <a href="#year" onClick={closeMenu}>The year</a>
          <a className="mf-nav-vote" href="#vote" onClick={closeMenu}>Why Wilfred</a>
        </div>
        <button className={`mf-menu-button${menuOpen ? " is-open" : ""}`} onClick={() => setMenuOpen((value) => !value)} type="button" aria-label="Toggle manifesto menu" aria-expanded={menuOpen}><span /><span /></button>
      </nav>

      <section className="mf-hero" id="top">
        <div className="mf-hero-grid" aria-hidden="true" />
        <div className="mf-hero-copy" data-reveal>
          <div className="mf-kicker"><span>2026 MANIFESTO</span><i /><b>OFFICE OF THE AUDITOR GENERAL</b></div>
          <h1>Accountability<br /><em>you can see.</em></h1>
          <p>I am building an independent office where concerns become trackable cases, audits explain what the numbers hide, and every finding points to responsibility and action.</p>
          <div className="mf-hero-actions">
            <a href="#concern-journey">See the system <span>↓</span></a>
            <a href="#commitments">Read my commitments</a>
          </div>
          <div className="mf-hero-signature"><strong>Wilfred Njeunwi Tagha</strong><span>Engineer · Analyst · Community leader</span></div>
        </div>

        <div className="mf-hero-system" data-reveal>
          <div className="mf-orbit mf-orbit-one" /><div className="mf-orbit mf-orbit-two" />
          <div className="mf-system-core"><span>OAG</span><b>CASE SYSTEM</b><small>Recorded · Routed · Resolved</small></div>
          <div className="mf-float-card mf-float-submit"><i>01</i><span><b>Concern raised</b><small>Student receives case ID</small></span></div>
          <div className="mf-float-card mf-float-owner"><i>03</i><span><b>Owner assigned</b><small>Responsibility made visible</small></span></div>
          <div className="mf-float-card mf-float-resolve"><i>05</i><span><b>Outcome recorded</b><small>Explanation returned</small></span></div>
          <div className="mf-live-chip"><i /> LIVE STATUS</div>
        </div>
      </section>

      <section className="mf-promise-strip" aria-label="Manifesto summary">
        <span>THE PROMISE</span>
        <p>Every concern recorded. Every action tracked. Every result explained.</p>
        <b>01 — 05</b>
      </section>

      <section className="mf-system-section" id="concern-journey">
        <div className="mf-section-heading" data-reveal>
          <span>THE CENTREPIECE</span>
          <h2>A concern should never<br />disappear into silence.</h2>
          <p>The proposed digital case system gives students one place to raise a concern and follow it from submission to an explained outcome.</p>
        </div>

        <form className="mf-prototype" onSubmit={previewConcern} data-reveal>
          <div><span>INTERACTIVE PROTOTYPE</span><p>Type a sample concern to see how it would move through the system. Nothing is submitted or stored.</p></div>
          <label><span>Sample concern</span><textarea value={concern} onChange={(event) => setConcern(event.target.value)} maxLength={180} rows={2} /></label>
          <button type="submit">Preview the journey <span>→</span></button>
        </form>

        <div className="mf-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} data-reveal>
          <div className="mf-carousel-progress"><span style={{ width: stageProgress }} /></div>
          <div className="mf-stage-tabs" role="tablist" aria-label="Concern journey stages">
            {concernStages.map((item, index) => (
              <button className={index === activeStage ? "is-active" : ""} key={item.short} onClick={() => setActiveStage(index)} type="button" role="tab" aria-selected={index === activeStage}>
                <span>{item.number}</span><b>{item.short}</b>
              </button>
            ))}
          </div>

          <article className="mf-stage-card" key={activeStage} aria-live="polite">
            <div className="mf-stage-copy">
              <div className="mf-stage-meta"><span>STEP {stage.number}</span><StatusPill status={stage.status} /></div>
              <h3>{stage.title}</h3>
              <p className="mf-stage-description">{stage.description}</p>
              <div className="mf-stage-detail"><span>STUDENT SEES</span><p>{stage.student}</p></div>
              <div className="mf-stage-detail"><span>OFFICE DOES</span><p>{stage.office}</p></div>
              <div className="mf-stage-owner"><small>RESPONSIBILITY</small><strong>{stage.owner}</strong></div>
            </div>
            <StageVisual stage={activeStage} concern={demoConcern} />
          </article>

          <div className="mf-carousel-controls">
            <button onClick={() => setActiveStage((activeStage - 1 + concernStages.length) % concernStages.length)} type="button" aria-label="Previous concern stage">←</button>
            <span>{String(activeStage + 1).padStart(2, "0")} / {String(concernStages.length).padStart(2, "0")}</span>
            <button onClick={() => setActiveStage((activeStage + 1) % concernStages.length)} type="button" aria-label="Next concern stage">→</button>
          </div>
        </div>
      </section>

      <section className="mf-audit-section" id="audits">
        <div className="mf-audit-copy" data-reveal>
          <span>MONTHLY AUDIT REPORTS</span>
          <h2>Not a list of numbers.<br />An explanation of control.</h2>
          <p>A useful audit tells students what came in, what was spent and what the records do not yet prove. It also identifies the rule that should have applied, the risk created, the responsible owner and the action required.</p>
          <ul>
            <li><i>01</i><span><b>Show the record</b>Income, expenditure, approvals and supporting documents.</span></li>
            <li><i>02</i><span><b>Explain the gap</b>Missing evidence, bypassed processes and unresolved clarification.</span></li>
            <li><i>03</i><span><b>Drive correction</b>Risk, recommendation, responsible owner and follow-up status.</span></li>
          </ul>
        </div>
        <AuditDocument />
      </section>

      <section className="mf-commitments" id="commitments">
        <div className="mf-section-heading mf-section-heading-light" data-reveal>
          <span>THE FULL MANDATE</span>
          <h2>Six commitments.<br />One standard of evidence.</h2>
          <p>The system is the centrepiece, but the Office must also protect financial clarity, fair hearings, credible elections and continuity.</p>
        </div>
        <div className="mf-commitment-grid">
          {commitments.map((item) => (
            <article key={item.index} data-reveal><span>{item.index}</span><h3>{item.title}</h3><p>{item.text}</p><i>↗</i></article>
          ))}
        </div>
      </section>

      <section className="mf-year" id="year">
        <div className="mf-section-heading" data-reveal>
          <span>ONE YEAR IN OFFICE</span>
          <h2>A rhythm students<br />can hold me to.</h2>
          <p>The work starts with the systems, continues through monthly reporting and ends with a complete public record and handover.</p>
        </div>
        <div className="mf-year-track" data-reveal>
          {yearPlan.map(([period, action], index) => (
            <article key={period}><div><span>{String(index + 1).padStart(2, "0")}</span><i /></div><section><small>{period}</small><p>{action}</p></section></article>
          ))}
        </div>
      </section>

      <section className="mf-vote" id="vote">
        <div className="mf-vote-pattern" aria-hidden="true" />
        <div data-reveal>
          <span>MY COMMITMENT</span>
          <blockquote>“Trust is not demanded.<br />It is demonstrated, line by line,<br />entry by entry.”</blockquote>
          <p>I offer the discipline of an engineer, the attention to evidence of an analyst and a record of service built around people.</p>
          <h2>Vote Wilfred Njeunwi Tagha</h2>
          <strong>FOR AUDITOR GENERAL</strong>
          <a href="#top">Return to the manifesto <span>↑</span></a>
        </div>
      </section>

      <footer className="mf-footer"><span>WILFRED NJEUNWI TAGHA</span><p>Your voice. Our accountability. A Guild you can trust.</p><a href="/">Portfolio ↗</a></footer>
    </main>
  );
}
