import { useState } from "react";
import { WEBSITE_PIPELINE } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function WebsitePipeline() {
  const [active, setActive] = useState(0);
  const [ref, visible] = useReveal(0.15);

  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div ref={ref} className={`reveal${visible ? " visible" : ""}`}>
          <div className="section-label">
            <span className="dot" />
            <span>Full Lifecycle</span>
            <span className="rule" />
          </div>
          <h2 className="section-title">From blank canvas to production.</h2>
          <p className="section-sub">
            Not isolated WordPress tasks - the complete build, start to
            finish.
          </p>
        </div>

        <div
          className="pipeline-row"
          style={{
            display: "flex",
            marginTop: "3rem",
            border: "1px solid var(--line)",
            borderRadius: 20,
            overflow: "hidden",
            minHeight: 260,
          }}
        >
          {WEBSITE_PIPELINE.map((stage, i) => (
            <div
              key={stage.stage}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              data-cursor="EXPAND"
              style={{
                flex: active === i ? 2.6 : 1,
                background: active === i ? "var(--charcoal)" : "var(--surface)",
                color: active === i ? "var(--ivory)" : "var(--charcoal)",
                borderRight:
                  i < WEBSITE_PIPELINE.length - 1
                    ? "1px solid var(--line)"
                    : "none",
                padding: "1.6rem 1.2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "flex 0.45s cubic-bezier(0.16,1,0.3,1), background 0.35s, color 0.35s",
                minWidth: 0,
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10.5,
                    color: active === i ? "var(--accent)" : "var(--charcoal-faint)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: active === i ? 19 : 13,
                    letterSpacing: active === i ? "0" : "0.03em",
                    marginTop: 10,
                    writingMode: active === i ? "horizontal-tb" : "vertical-rl",
                    textOrientation: active === i ? "mixed" : "mixed",
                    whiteSpace: "nowrap",
                  }}
                >
                  {stage.stage}
                </h4>
              </div>
              {active === i && (
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: "rgba(250,248,243,0.72)",
                    marginTop: "1rem",
                  }}
                >
                  {stage.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .pipeline-row { flex-direction: column !important; min-height: auto !important; }
          .pipeline-row > div { flex: none !important; border-right: none !important; border-bottom: 1px solid var(--line); }
          .pipeline-row h4 { writing-mode: horizontal-tb !important; font-size: 15px !important; }
        }
      `}</style>
    </section>
  );
}
