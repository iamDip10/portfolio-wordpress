import { useState } from "react";
import { CONTACT_LINKS } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const [ref, visible] = useReveal(0.2);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputStyle = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--line)",
    borderRadius: 10,
    color: "var(--charcoal)",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    padding: "0.85rem 1rem",
    outline: "none",
  };

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3200);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--ivory-deep)" }}>
      <div className="wrap">
        <div ref={ref} className={`reveal${visible ? " visible" : ""}`}>
          <div className="section-label">
            <span className="dot" />
            <span>Get In Touch</span>
            <span className="rule" />
          </div>
          <h2 className="section-title">Build the WordPress system your business actually needs.</h2>
          <p className="section-sub">
            Open to WordPress engineering roles, freelance builds, and remote
            opportunities.
          </p>
        </div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "3rem",
            marginTop: "2.6rem",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.6rem" }}>
              {CONTACT_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  data-cursor="OPEN"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem 1.2rem",
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        color: "var(--charcoal-faint)",
                        textTransform: "uppercase",
                        marginBottom: 3,
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--charcoal)" }}>{item.value}</div>
                  </div>
                  <span style={{ color: "var(--accent)" }}>→</span>
                </a>
              ))}
            </div>

            <div
              style={{
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-line)",
                borderRadius: 14,
                padding: "1.1rem 1.3rem",
                display: "flex",
                gap: "0.7rem",
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", marginTop: 5, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, color: "var(--accent-deep)", fontFamily: "var(--font-display)" }}>
                  Currently Available
                </div>
                <div style={{ fontSize: 12, color: "var(--charcoal-soft)", lineHeight: 1.6, marginTop: 3 }}>
                  Open to WordPress engineering roles and select freelance
                  projects. Remote preferred.
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              style={inputStyle}
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              style={inputStyle}
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              style={{ ...inputStyle, height: 130, resize: "vertical" }}
              placeholder="Tell me about the WordPress project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              style={{ alignSelf: "flex-start", background: sent ? "#166534" : undefined }}
            >
              {sent ? "✓ Message Sent" : "Send Message →"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
