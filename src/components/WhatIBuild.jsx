import { WHAT_I_BUILD } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function BuildCard({ item, delay }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={`reveal card${visible ? " visible" : ""}`}
      style={{
        transitionDelay: `${delay}ms`,
        padding: "1.9rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
      }}
      data-cursor="VIEW"
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--accent)",
            letterSpacing: "0.1em",
          }}
        >
          {item.n}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 21,
          color: "var(--charcoal)",
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontSize: 13.5,
          lineHeight: 1.7,
          color: "var(--charcoal-soft)",
          minHeight: 66,
        }}
      >
        {item.desc}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0.4rem",
          paddingTop: "0.9rem",
          borderTop: "1px solid var(--line-soft)",
        }}
      >
        {item.pipeline.map((step, i) => (
          <span key={step} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--charcoal-faint)",
                textTransform: "uppercase",
              }}
            >
              {step}
            </span>
            {i < item.pipeline.length - 1 && (
              <span style={{ color: "var(--accent)", fontSize: 10 }}>→</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WhatIBuild() {
  const [titleRef, titleVisible] = useReveal(0.2);
  return (
    <section id="about" className="section" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div ref={titleRef} className={`reveal${titleVisible ? " visible" : ""}`}>
          <div className="section-label">
            <span className="dot" />
            <span>What I Do</span>
            <span className="rule" />
          </div>
          <h2 className="section-title">What I build inside WordPress.</h2>
          <p className="section-sub">
            Not installing plugins. Building the functionality that doesn't
            exist yet — and the complete websites that run on top of it.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.2rem",
            marginTop: "3rem",
          }}
        >
          {WHAT_I_BUILD.map((item, i) => (
            <BuildCard item={item} key={item.n} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
