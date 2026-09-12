import { EXPERIENCE, EDUCATION } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function ExpItem({ exp, index }) {
  const [ref, visible] = useReveal(0.15);
  return (
    <div
      ref={ref}
      className={`reveal${visible ? " visible" : ""}`}
      style={{
        transitionDelay: `${index * 90}ms`,
        display: "grid",
        gridTemplateColumns: "34px 1fr",
        gap: "1.2rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "var(--accent)",
            marginTop: 4,
          }}
        />
        {index < EXPERIENCE.length - 1 && (
          <div style={{ flex: 1, width: 1, background: "var(--line)", marginTop: 8 }} />
        )}
      </div>
      <div style={{ paddingBottom: "2.4rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "0.3rem",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 18,
              color: "var(--charcoal)",
            }}
          >
            {exp.role}
          </h3>
          <span className="tag">{exp.period}</span>
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12.5,
            color: "var(--accent-deep)",
            marginBottom: "0.2rem",
          }}
        >
          {exp.company}
        </div>
        <div style={{ fontSize: 12, color: "var(--charcoal-faint)", marginBottom: "1rem" }}>
          {exp.location}
        </div>
        <div className="card" style={{ padding: "1.2rem", boxShadow: "none" }}>
          {exp.points.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "0.7rem",
                marginBottom: i < exp.points.length - 1 ? "0.75rem" : 0,
              }}
            >
              <span style={{ color: "var(--accent)", fontSize: 11, marginTop: 3, flexShrink: 0 }}>▸</span>
              <span style={{ fontSize: 13.5, color: "var(--charcoal-soft)", lineHeight: 1.7 }}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [titleRef, titleVisible] = useReveal(0.2);
  return (
    <section id="experience" className="section" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div ref={titleRef} className={`reveal${titleVisible ? " visible" : ""}`}>
          <div className="section-label">
            <span className="dot" />
            <span>Engineering Journey</span>
            <span className="rule" />
          </div>
          <h2 className="section-title">Experience</h2>
        </div>

        <div style={{ marginTop: "2.6rem", maxWidth: 760 }}>
          {EXPERIENCE.map((exp, i) => (
            <ExpItem exp={exp} index={i} key={exp.role} />
          ))}
        </div>

        <div style={{ marginTop: "1rem" }}>
          <div className="section-label">
            <span className="dot" />
            <span>Education</span>
            <span className="rule" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
              gap: "1rem",
              marginTop: "1.4rem",
            }}
          >
            {EDUCATION.map((ed) => (
              <div className="card" key={ed.degree} style={{ padding: "1.4rem" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 14.5,
                    color: "var(--charcoal)",
                    lineHeight: 1.4,
                    marginBottom: "0.4rem",
                  }}
                >
                  {ed.degree}
                </h4>
                <div style={{ fontSize: 12.5, color: "var(--accent-deep)", fontFamily: "var(--font-mono)", marginBottom: 3 }}>
                  {ed.institution}
                </div>
                <div style={{ fontSize: 11, color: "var(--charcoal-faint)", marginBottom: "0.7rem" }}>
                  {ed.period}
                </div>
                <p style={{ fontSize: 12.5, color: "var(--charcoal-soft)", lineHeight: 1.6 }}>{ed.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
