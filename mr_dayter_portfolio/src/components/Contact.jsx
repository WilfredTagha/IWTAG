import { useState } from "react";
import LogoMark from "./LogoMark";

export default function Contact({ dark }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const set = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setIsError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully! I’ll get back to you soon.");
        setIsError(false);

        setForm({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setStatus(data.error || "Failed to send message.");
        setIsError(true);
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again later.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section" id="contact">
      <div className="inner">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="avail-pill" style={{ display: "inline-flex" }}>
            <div className="avail-dot" />
            Available for work
          </div>
        </div>

        <div className="contact-layout">
          {/* Left — photo card */}
          <div className="contact-img">
            <div className="wordmark">
              <LogoMark dark={dark} size={90} />
              <div className="wm-mr">MR.</div>
              <div className="wm-name">DAYTER</div>
              <div className="wm-tag">Where Data Meets Intelligence</div>
            </div>

            <div className="contact-badge">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C10.343 2 9 3.343 9 5c0 .552.448 1 1 1s1-.448 1-1c0-.552.448-1 1-1s1 .448 1 1c0 .552.448 1 1 1s1-.448 1-1C15 3.343 13.657 2 12 2zM8.5 7C7.672 7 7 7.672 7 8.5V17c0 2.21 1.79 4 4 4h2c2.21 0 4-1.79 4-4V8.5C17 7.672 16.328 7 15.5 7H8.5z" />
              </svg>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className="s-tag">06 — LET'S WORK TOGETHER</div>
            <h2 className="s-title">
              LET'S WORK
              <br />
              TOGETHER
            </h2>
            <div className="abar">
              <div className="abar-1" />
              <div className="abar-2" />
            </div>
            <p className="s-desc" style={{ marginBottom: 28 }}>
              Let's build something impactful together — whether it's your data
              infrastructure, analytics stack, or your next big data product.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-g" style={{ marginBottom: 0 }}>
                  <label className="form-lbl">Name</label>
                  <input
                    className="form-in"
                    name="name"
                    value={form.name}
                    onChange={set}
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="form-g" style={{ marginBottom: 0 }}>
                  <label className="form-lbl">Email</label>
                  <input
                    className="form-in"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={set}
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-g">
                <label className="form-lbl">Service Needed?</label>
                <select
                  className="form-sel"
                  name="service"
                  value={form.service}
                  onChange={set}
                >
                  <option value="">Select...</option>
                  <option>Data Engineering</option>
                  <option>Analytics & Dashboards</option>
                  <option>Data Strategy</option>
                  <option>AI & ML Integration</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-g">
                <label className="form-lbl">What Can I Help You With?</label>
                <textarea
                  className="form-ta"
                  name="message"
                  value={form.message}
                  onChange={set}
                  placeholder="Hello, I'd like to enquire about..."
                  required
                />
              </div>

              <button className="btn-submit" type="submit" disabled={loading}>
                {loading ? "SENDING..." : "SUBMIT"}
              </button>

              {status && (
                <p
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    color: isError ? "#ff6b6b" : "#22c55e",
                  }}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}