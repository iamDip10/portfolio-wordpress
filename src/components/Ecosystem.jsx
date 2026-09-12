import { ECOSYSTEM } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function Cluster({ group, index }) {
  const [ref, visible] = useReveal(0.15);
  const offsets = [0, 26, 8, 34, 14];
  return (
    <div
      ref={ref}
      className={`reveal${visible ? " visible" : ""}`}
      style={{
        transitionDelay: `${index * 90}ms`,
        marginTop: index % 2 === 0 ? 0 : offsets[index % offsets.length],
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10.5,
          letterSpacing: "0.14em",
          color: "var(--accent-deep)",
          marginBottom: "0.9rem",
        }}
      >
        {group.category}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {group.items.map((item) => (
          <div
            key={item}
            className="card"
            style={{
              padding: "0.85rem 1.1rem",
              fontSize: 13.5,
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              color: "var(--charcoal)",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Ecosystem() {
  const [ref, visible] = useReveal(0.2);
  return (
    <section className="section" style={{ background: "var(--ivory-deep)" }}>
      <div className="wrap">
        <div ref={ref} className={`reveal${visible ? " visible" : ""}`}>
          <div className="section-label">
            <span className="dot" />
            <span>Ecosystem</span>
            <span className="rule" />
          </div>
          <h2 className="section-title">The WordPress ecosystem, mapped.</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.6rem 1.4rem",
            marginTop: "3rem",
          }}
        >
          {ECOSYSTEM.map((group, i) => (
            <Cluster group={group} index={i} key={group.category} />
          ))}
        </div>
      </div>
    </section>
  );
}
