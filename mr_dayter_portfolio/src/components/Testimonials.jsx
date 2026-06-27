const REVIEWS = [
  { text: "Wilfred automated our entire reporting workflow with a Python pipeline. What used to take our team half a day now runs in minutes. Highly recommended.", name: "Research Client",    role: "Data Analysis Project",   init: "RC" },
  { text: "He built our mobile app from scratch during the Orange Summer Challenge. Clean architecture, good documentation, and delivered on time.", name: "Orange Cameroon Team", role: "Mobile Dev Internship",    init: "OC" },
  { text: "Wilfred restructured our codebase and added new SMS features that let us control devices offline. Real engineering skills.", name: "UWACO Team",          role: "Software Engineer",       init: "UW" },
  { text: "He designed and ran a full database bootcamp for our community. Three out of four students graduated with real, working projects.", name: "I4G UBuea Chapter",  role: "Community Bootcamp Lead", init: "I4" },
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
        <div className="s-tag">04 — WHAT PEOPLE SAY</div>
        <h2 className="s-title">WHAT PEOPLE SAY</h2>
        <div className="abar"><div className="abar-1"/><div className="abar-2"/></div>
        <p className="s-desc">Feedback from teams and communities I've worked with — from automation projects to mobile builds to community bootcamps.</p>

        <div className="tgrid">

          {/* Row 1: review · review · stat card (dark/white) */}
          <ReviewCard review={REVIEWS[0]} />
          <ReviewCard review={REVIEWS[1]} />

          <div className="tcard sc1">
            <div className="sc-label">Reporting time reduced for a client through Python automation</div>
            <div>
              <div className="sc-big">80%</div>
              <div className="sc-lbl">Time Saved — SYNDATECH</div>
            </div>
          </div>

          {/* Row 2: stat card (accent) · review · review */}
          <div className="tcard sc2">
            <div className="sc-label">App speed and UX improved through code restructuring and caching</div>
            <div>
              <div className="sc-big">10%</div>
              <div className="sc-lbl">Performance Gain — UWACO</div>
            </div>
          </div>

          <ReviewCard review={REVIEWS[2]} />
          <ReviewCard review={REVIEWS[3]} />

        </div>
      </div>
    </div>
  );
}