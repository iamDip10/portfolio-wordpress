import { PLUGIN_PIPELINE, CODE_FRAGMENTS } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function StageRow({ stage, note, index, delay }) {
  const [ref, visible] = useReveal(0.15);
  return (
    <div
      ref={ref}
      className={`reveal${visible ? " visible" : ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: "40px 1fr",
        gap: "1.1rem",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "var(--surface)",
            border: "2px solid var(--accent)",
            flexShrink: 0,
          }}
        />
        {index < PLUGIN_PIPELINE.length - 1 && (
          <div
            style={{
              flex: 1,
              width: 2,
              background:
                "linear-gradient(180deg, var(--accent-line), transparent)",
              marginTop: 4,
            }}
          />
        )}
      </div>
      <div style={{ paddingBottom: "1.6rem" }}>
        <h4
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 17,
            color: "var(--charcoal)",
            marginBottom: 4,
          }}
        >
          {stage}
        </h4>
        <p style={{ fontSize: 13, color: "var(--charcoal-soft)", lineHeight: 1.6 }}>
          {note}
        </p>
      </div>
    </div>
  );
}

export default function PluginLab() {
  const [titleRef, titleVisible] = useReveal(0.2);
  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3.5rem",
          }}
          className="plugin-lab-grid"
        >
          <div>
            <div ref={titleRef} className={`reveal${titleVisible ? " visible" : ""}`}>
              <div className="section-label">
                <span className="dot" />
                <span>Plugin Engineering</span>
                <span className="rule" />
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(1.9rem,3.6vw,2.8rem)" }}>
                When a plugin doesn't exist, I build it.
              </h2>
              <p className="section-sub">
                Off-the-shelf plugins solve generic problems. Real businesses
                need specific ones - custom logic, wired into WordPress the
                way it was designed to be extended.
              </p>
            </div>

            <div
              style={{
                marginTop: "2.2rem",
                background: "var(--charcoal)",
                borderRadius: 16,
                padding: "1.3rem 1.4rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.55rem",
              }}
            >
              <div style={{ display: "flex", gap: 6, marginBottom: "0.4rem" }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#eb5757" }} />
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#f2c94c" }} />
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#27ae60" }} />
              </div>
              {CODE_FRAGMENTS.map((line) => (
                <code
                  key={line}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "#e8e6f0",
                    opacity: 0.85,
                    lineHeight: 1.7,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {line}
                </code>
              ))}
            </div>
          </div>

          <div>
            {PLUGIN_PIPELINE.map((p, i) => (
              <StageRow
                key={p.stage}
                stage={p.stage}
                note={p.note}
                index={i}
                delay={i * 40}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .plugin-lab-grid { grid-template-columns: 1fr !important; gap: 2.4rem !important; }
        }
      `}</style>
    </section>
  );
}
