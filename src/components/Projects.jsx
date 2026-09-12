import { PROJECTS } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function ProjectCase({ project, index }) {
  const [ref, visible] = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal case-row${visible ? " visible" : ""}`}
      style={{
        transitionDelay: `${(index % 3) * 60}ms`,
        borderTop: "1px solid var(--line)",
        padding: "3.2rem 0",
        display: "grid",
        gridTemplateColumns: "0.55fr 1fr",
        gap: "2.6rem",
      }}
    >
      <div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: "0.1em",
            color: "var(--accent-deep)",
            textTransform: "uppercase",
          }}
        >
          {project.category}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "var(--charcoal)",
            margin: "0.5rem 0 0.4rem",
            lineHeight: 1.12,
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--charcoal-faint)",
            marginBottom: "1.2rem",
          }}
        >
          {project.tagline}
        </p>

        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: "0.6rem 1.1rem", fontSize: 11 }}
              data-cursor="VIEW CASE STUDY"
            >
              Source →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: "0.6rem 1.1rem", fontSize: 11 }}
              data-cursor="EXPLORE"
            >
              {project.demoLabel || "Live"} →
            </a>
          )}
          {project.comingSoon && (
            <span
              className="tag"
              style={{ background: "var(--ivory-deep)", color: "var(--charcoal-faint)", borderColor: "var(--line)" }}
            >
              In Progress
            </span>
          )}
        </div>
      </div>

      <div>
        <p
          style={{
            fontSize: 14.5,
            lineHeight: 1.8,
            color: "var(--charcoal-soft)",
            marginBottom: "1.3rem",
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
            gap: "1.5rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--charcoal-faint)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              Role
            </div>
            <p style={{ fontSize: 13, color: "var(--charcoal-soft)", lineHeight: 1.7 }}>
              {project.role}
            </p>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--charcoal-faint)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              Key Features
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {project.features.map((f) => (
                <div key={f} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent)", fontSize: 11, marginTop: 3 }}>▸</span>
                  <span style={{ fontSize: 12.5, color: "var(--charcoal-soft)", lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.3rem" }}>
          {project.tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, visible] = useReveal(0.2);
  return (
    <section id="work" className="section" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div ref={ref} className={`reveal${visible ? " visible" : ""}`}>
          <div className="section-label">
            <span className="dot" />
            <span>Selected Work</span>
            <span className="rule" />
          </div>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">
            Real builds — WordPress tools shipped into production, and
            full-stack platforms built end-to-end.
          </p>
        </div>

        <div style={{ marginTop: "1rem" }}>
          {PROJECTS.map((p, i) => (
            <ProjectCase project={p} index={i} key={p.name} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .case-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
