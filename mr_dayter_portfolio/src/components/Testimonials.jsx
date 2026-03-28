const REVIEWS = [
  { text: "Wilfred truly understood our data infrastructure challenges and built a pipeline that scaled flawlessly. The results exceeded every expectation.", name: "James Okonkwo",  role: "Head of Engineering", init: "JO" },
  { text: "He took the time to understand our analytics goals and delivered dashboards that resonated perfectly with our executive team.",                   name: "Michelle Chen",  role: "Data Director",      init: "MC" },
  { text: "His data engineering skills are unmatched. He transformed our messy data sources into a high-performing, unified warehouse.",                    name: "Sarah Johnson",  role: "CEO",                init: "SJ" },
  { text: "As a startup founder, I appreciated how stress-free Wilfred made the data strategy process — clear, fast, and impactful.",                       name: "Laura Bennett",  role: "Founder",            init: "LB" },
];

const Stars = () => (
  <div className="stars">
    {[1,2,3,4,5].map(i => <span key={i} className="star">★</span>)}
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="tcard">
    <Stars />
    <p className="ttext">{review.text}</p>
    <div className="tauthor">
      <div className="tavatar">{review.init}</div>
      <div>
        <div className="tname">{review.name}</div>
        <div className="trole">{review.role}</div>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <div className="section" id="testimonials">
      <div className="inner">
        <div className="s-tag">04 — CLIENT REVIEWS</div>
        <h2 className="s-title">WHAT MY CLIENTS SAY</h2>
        <div className="abar"><div className="abar-1"/><div className="abar-2"/></div>
        <p className="s-desc">Here's what my clients have shared about their experiences. Their trust and results motivate me to keep delivering data work that creates real impact.</p>

        <div className="tgrid">

          {/* Row 1: review · review · stat card (dark/white) */}
          <ReviewCard review={REVIEWS[0]} />
          <ReviewCard review={REVIEWS[1]} />

          <div className="tcard sc1">
            <div className="sc-label">I've worked with 15+ happy clients</div>
            <div>
              <div className="sc-big">98%</div>
              <div className="sc-lbl">Satisfaction Rate</div>
            </div>
          </div>

          {/* Row 2: stat card (accent) · review · review */}
          <div className="tcard sc2">
            <div className="sc-label">My work helped clients improve efficiency by</div>
            <div>
              <div className="sc-big">3×</div>
              <div className="sc-lbl">Average Performance Gain</div>
            </div>
          </div>

          <ReviewCard review={REVIEWS[2]} />
          <ReviewCard review={REVIEWS[3]} />

        </div>
      </div>
    </div>
  );
}