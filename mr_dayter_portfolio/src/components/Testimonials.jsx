const WORK = [
  { number: "01", title: "Reporting automation", org: "SYNDATECH", text: "Built a Python workflow for cleaning and restructuring reports, cutting preparation time by 80%." },
  { number: "02", title: "Air-quality platform", org: "Orange Cameroon", text: "Built the software layer and mobile experience for a system that collects and displays sensor data." },
  { number: "03", title: "Connected vehicle tools", org: "UWACO", text: "Improved application performance and added web and SMS communication for online and offline device control." },
  { number: "04", title: "Database bootcamp", org: "I4G UBuea", text: "Designed and taught a three-month database curriculum; three of four mentees completed the programme with projects." },
];

function WorkCard({ work }) {
  return (
    <article className="tcard work-card">
      <div className="work-card-top"><span>{work.number}</span><span>{work.org}</span></div>
      <h3>{work.title}</h3>
      <p className="ttext">{work.text}</p>
    </article>
  );
}

export default function Testimonials() {
  return (
    <div className="section" id="testimonials">
      <div className="inner">
        <div className="s-tag">04 - SELECTED WORK</div>
        <h2 className="s-title">PROOF IN THE WORK</h2>
        <div className="abar"><div className="abar-1" /><div className="abar-2" /></div>
        <p className="s-desc">A few outcomes from engineering, data and community projects. Each one is grounded in work documented in my professional and service record.</p>
        <div className="tgrid">
          <WorkCard work={WORK[0]} />
          <WorkCard work={WORK[1]} />
          <div className="tcard sc1"><div className="sc-label">Reporting time reduced through Python automation</div><div><div className="sc-big">80%</div><div className="sc-lbl">Time saved - SYNDATECH</div></div></div>
          <div className="tcard sc2"><div className="sc-label">Application performance improved through code restructuring and caching</div><div><div className="sc-big">10%</div><div className="sc-lbl">Performance gain - UWACO</div></div></div>
          <WorkCard work={WORK[2]} />
          <WorkCard work={WORK[3]} />
        </div>
      </div>
    </div>
  );
}
