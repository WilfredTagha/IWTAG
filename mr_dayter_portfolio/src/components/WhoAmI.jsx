const commitments = [
  { number: "01", title: "Verify the record", text: "I will examine the facts carefully, keep clear records, and separate evidence from assumption." },
  { number: "02", title: "Explain what matters", text: "I will turn findings into plain, useful reports that the guild and council can understand and act on." },
  { number: "03", title: "Protect the room", text: "Accountability should strengthen the institution. I will be firm on standards and constructive with people." },
];

const experience = [
  { period: "2024 - Present", role: "Website Manager", organisation: "CDR Elite Writers", detail: "Researches and optimises high-volume content, manages updates and promotion, and built automated email campaigns that shortened response time." },
  { period: "2022 - Present", role: "Data Analyst", organisation: "Mr Dayter", detail: "Supports undergraduate and postgraduate research across health, engineering, socioeconomic and political subjects." },
  { period: "2024", role: "Mobile Developer Intern", organisation: "Orange Cameroon", detail: "Built the software for an air-quality information system, including the mobile experience used to display sensor data." },
  { period: "2023 - 2024", role: "Software Engineer", organisation: "UWACO", detail: "Restructured and cached application code, improved performance, and added web and SMS communication for connected devices." },
  { period: "2022 - 2023", role: "Data Scientist", organisation: "SYNDATECH", detail: "Built Python reporting automation that reduced preparation time by 80% and developed interactive Tableau dashboards." },
];

const leadership = [
  { title: "Youth leadership", meta: "Macedonia Baptist Church", text: "Helps coordinate the development and wellbeing of more than 300 young people with a team of 12 leaders, including education, service and career programmes." },
  { title: "Scholar and mentor", meta: "Open Dreams | Since 2017", text: "Facilitated lessons on leadership and purpose, joined school and medical outreach, and represented the programme in a CRTV discussion on online learning." },
  { title: "Core team and database lead", meta: "Ingressive for Good UBuea | 2022 - 2024", text: "Helped build the community, led event and data work, and designed a three-month database programme in which three of four mentees graduated with projects." },
  { title: "Regional coordinator and co-founder", meta: "Edumail | 2017 - 2022", text: "Connected students affected by the Anglophone crisis with books, mentoring and learning support across the North West Region." },
  { title: "Radio presenter", meta: "Harvest Echoes, CBC Radio | 2017 - 2020", text: "Reported, moderated and presented weekly programmes on faith, health, careers, scholarships, leadership and personal development." },
  { title: "Student representative and educator", meta: "University of Buea and OCHS", text: "Coordinated communication between students and lecturers, organised tutorials, and taught practical computer science in C, databases and web development." },
];

const projects = [
  { title: "CLADIAQ", type: "Air quality system", text: "A cloud-backed system for collecting, storing and displaying air-quality data with personalised recommendations. Built with AWS, Django and Flutter." },
  { title: "Fingerprint voting", type: "Final-year engineering project", text: "A biometric school voting system designed to make elections more efficient and strengthen voter verification." },
  { title: "Crop illness detection", type: "Machine learning", text: "A crop-disease detection model paired with a mobile simulation to explore practical monitoring for healthier yields." },
  { title: "Database bootcamp", type: "Community education", text: "A three-month curriculum in database management, built and taught for the Ingressive for Good University of Buea community." },
];

const credentials = [
  "BEng Software Engineering, University of Buea",
  "Programming for Data Science, Udacity",
  "Duke of Edinburgh International Award, Silver",
  "Public Speaking Workshop, Youth World Organization",
  "Open Dreams College Prep Academy",
  "Web Design Bootcamp",
  "Youth Leadership Conference participant",
];

export default function WhoAmI() {
  return (
    <main className="identity-page">
      <section className="identity-hero" id="top">
        <div className="identity-hero-copy">
          <div className="identity-kicker">WHO_AM_I / WILFRED NJEUNWI TAGHA</div>
          <p className="identity-campaign-label">Candidate for Auditor General</p>
          <h1>Records that<br />tell the truth.</h1>
          <p className="identity-lede">I am a software engineer, data analyst, educator and community leader. I am running for Auditor General because accountability should be visible in the work: careful records, clear reporting and follow-through.</p>
          <div className="identity-actions">
            <a className="identity-primary" href="/documents/Wilfred_Njeunwi_Tagha_CV.pdf" download>Download my CV <span aria-hidden="true">&#8595;</span></a>
            <a className="identity-secondary" href="#record">Explore my record</a>
          </div>
          <div className="identity-tags" aria-label="Campaign tags"><span>#VoteWilfred4AuditorGeneral</span><span>#MrDayter</span><span>#AudiFred</span></div>
        </div>
        <div className="identity-portrait-wrap">
          <div className="identity-portrait-index" aria-hidden="true">01</div>
          <img src="/images/profile.jpg" alt="Wilfred Njeunwi Tagha" className="identity-portrait" />
          <div className="identity-portrait-caption"><span>Buea, Cameroon</span><span>Engineer / Leader</span></div>
        </div>
      </section>

      <section className="identity-statement" id="case">
        <div className="identity-section-label">THE CASE</div>
        <blockquote>“Trust is not demanded. It is demonstrated, line by line, entry by entry.”</blockquote>
        <div className="identity-statement-grid">
          <p className="identity-statement-lead">Anyone can promise accountability. I want to show what it looks like in practice.</p>
          <div className="identity-statement-body">
            <p>It means holding the guild to its standards without tearing the room apart. It means understanding what students need, what the council needs and what the institution needs from the same set of facts.</p>
            <p>It also means speaking clearly enough to prompt action. A report that nobody understands or acts on is only paperwork.</p>
          </div>
        </div>
      </section>

      <section className="identity-section identity-commitments">
        <div className="identity-section-head"><div className="identity-section-label">HOW I WILL SERVE</div><h2>Accountability people<br />can use.</h2></div>
        <div className="commitment-grid">
          {commitments.map((item) => <article className="commitment-card" key={item.number}><span className="commitment-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="identity-proof" id="record">
        <div className="identity-section-label">THE RECORD</div>
        <div className="proof-grid">
          <div className="proof-item"><strong>10+</strong><span>years across service and leadership roles</span></div>
          <div className="proof-item"><strong>300+</strong><span>young people served through church leadership</span></div>
          <div className="proof-item"><strong>80%</strong><span>reduction in reporting time at SYNDATECH</span></div>
          <div className="proof-item"><strong>3 / 4</strong><span>database mentees graduated with projects</span></div>
        </div>
      </section>

      <section className="identity-section" id="experience">
        <div className="identity-section-head split"><div><div className="identity-section-label">PROFESSIONAL EXPERIENCE</div><h2>I build systems<br />that make work clearer.</h2></div><p>My work sits where engineering, data and communication meet: building software, improving reporting and helping people use information well.</p></div>
        <div className="experience-list">
          {experience.map((item) => <article className="experience-row" key={`${item.organisation}-${item.role}`}><div className="experience-period">{item.period}</div><div><h3>{item.role}</h3><div className="experience-org">{item.organisation}</div></div><p>{item.detail}</p></article>)}
        </div>
      </section>

      <section className="identity-section identity-leadership">
        <div className="identity-section-head split"><div><div className="identity-section-label">LEADERSHIP AND SERVICE</div><h2>Different seats.<br />The same duty of care.</h2></div><p>Financial Secretary, Treasurer, Communication Minister, Youth Leader and President: the titles changed, but the responsibility remained the same - keep the record, represent people fairly and leave the team stronger.</p></div>
        <div className="leadership-grid">
          {leadership.map((item) => <article className="leadership-card" key={item.title}><div className="leadership-marker" aria-hidden="true" /><h3>{item.title}</h3><div className="leadership-meta">{item.meta}</div><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="identity-section">
        <div className="identity-section-head"><div className="identity-section-label">SELECTED PROJECTS</div><h2>Ideas made<br />concrete.</h2></div>
        <div className="identity-project-grid">
          {projects.map((project, index) => <article className="identity-project" key={project.title}><div className="identity-project-top"><span>0{index + 1}</span><span>{project.type}</span></div><h3>{project.title}</h3><p>{project.text}</p></article>)}
        </div>
      </section>

      <section className="identity-section identity-credentials">
        <div><div className="identity-section-label">EDUCATION AND CREDENTIALS</div><h2>Training behind<br />the work.</h2><p className="identity-credentials-copy">Formal engineering education, practical technical training, public speaking and youth leadership have prepared me to examine detail and communicate the bigger picture.</p></div>
        <ul>{credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul>
      </section>

      <section className="identity-close" id="contact">
        <div className="identity-section-label">MY COMMITMENT</div>
        <p className="identity-close-line">When you choose an Auditor General, choose someone prepared to carry the full weight of leadership.</p>
        <h2>Vote Wilfred Njeunwi Tagha<br />for Auditor General.</h2>
        <div className="identity-close-actions"><a href="mailto:wilfred@mrdayter.com">wilfred@mrdayter.com</a><a href="/documents/Wilfred_Njeunwi_Tagha_CV.pdf" target="_blank" rel="noreferrer">View CV</a><a href="/">Back to portfolio</a></div>
      </section>
    </main>
  );
}
