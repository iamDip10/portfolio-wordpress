import { useState } from "react";
import { CAPABILITY_MODULES } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function CapabilityLab() {
  const [ref, visible] = useReveal(0.15);
  const [active, setActive] = useState(null);

  return (
    <section id="capabilities" className="section" style={{ background: "var(--charcoal)" }}>
      <div className="wrap">
        <div ref={ref} className={`reveal${visible ? " visible" : ""}`}>
          <div className="section-label">
            <span className="dot" style={{ background: "#5b7bff" }} />
            <span style={{ color: "#9db1ff" }}>Capability Lab</span>
            <span className="rule" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.14), transparent)" }} />
          </div>
          <h2 className="section-title" style={{ color: "var(--ivory)" }}>
            Things I can make WordPress do.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: "0.9rem",
            marginTop: "2.6rem",
          }}
        >
          {CAPABILITY_MODULES.map((mod) => {
            const isActive = active === mod.title;
            return (
              <div
                key={mod.title}
                onMouseEnter={() => setActive(mod.title)}
                onMouseLeave={() => setActive(null)}
                data-cursor="EXPLORE"
                style={{
                  border: `1px solid ${isActive ? "rgba(93,123,255,0.55)" : "rgba(255,255,255,0.09)"}`,
                  background: isActive ? "rgba(93,123,255,0.08)" : "rgba(255,255,255,0.02)",
                  borderRadius: 14,
                  padding: "1.2rem 1.3rem",
                  minHeight: 108,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease",
                  cursor: "default",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 14.5,
                    color: "var(--ivory)",
                  }}
                >
                  {mod.title}
                </h4>
                <p
                  style={{
                    fontSize: 12,
                    lineHeight: 1.55,
                    color: isActive ? "rgba(233,236,255,0.85)" : "rgba(255,255,255,0.35)",
                    transition: "color 0.25s",
                    marginTop: 8,
                  }}
                >
                  {mod.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
