import { useState } from "react";

const FAQS = [
  { q: "WHAT SERVICES DO YOU OFFER?",               a: "I offer end-to-end data engineering (pipelines, warehouses, ETL), analytics & dashboarding, data strategy consulting, and AI/ML integration services. If it involves data, I can help." },
  { q: "HOW DOES THE DATA PROCESS WORK?",           a: "We start with a discovery call to understand your data landscape and goals. I then scope the work, build iteratively with regular check-ins, and deliver with full documentation and handoff support." },
  { q: "HOW LONG DOES A PROJECT USUALLY TAKE?",     a: "A focused analytics project may take 2–4 weeks. A full data warehouse build typically ranges from 6–12 weeks depending on complexity. I'll give you a clear timeline before we start." },
  { q: "WHAT DO I NEED TO PROVIDE BEFORE STARTING?",a: "Access to your data sources, a brief on your business goals, and a point of contact. I handle everything else — from scoping to delivery. No technical experience needed on your end." },
  { q: "DO YOU OFFER REVISIONS?",                   a: "Yes. Every engagement includes at least two rounds of revisions. I want to make sure what I build actually fits how your team works. We won't close out until you're satisfied." },
  { q: "HOW DO I GET STARTED?",                     a: "Just fill out the contact form below or send me an email. I'll respond within 24 hours to schedule a free 30-minute discovery call." },
];

const Icon = () => (
  <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 15l-6-6-6 6"/>
  </svg>
);

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div className="section" id="faq">
      <div className="inner">
        <div className="faq-layout">
          <div>
            <div className="s-tag">05 — FAQ</div>
            <h2 className="s-title" style={{ fontSize:"clamp(22px,3vw,38px)" }}>
              FREQUENTLY<br />ASKED<br />QUESTIONS
            </h2>
            <div className="abar"><div className="abar-1"/><div className="abar-2"/></div>
            <p className="s-desc">Answers to the most common questions I receive. Don't see yours? Feel free to reach out.</p>
          </div>

          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item${open === i ? " open" : ""}`} onClick={() => setOpen(open === i ? null : i)}>
                <div className="faq-hd">
                  <span className="faq-q">{i + 1}. {f.q}</span>
                  <Icon />
                </div>
                <div className="faq-body">
                  <p className="faq-ans">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}