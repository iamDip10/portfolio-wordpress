import { useCallback, useRef, useState } from "react";
import { CUSTOMIZATION_PAIRS } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function SliderPanel() {
  const trackRef = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    updateFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onUp = () => (dragging.current = false);

  return (
    <div
      ref={trackRef}
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={onDown}
      onTouchMove={onMove}
      onTouchEnd={onUp}
      data-cursor="DRAG"
      style={{
        position: "relative",
        height: 320,
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid var(--line)",
        cursor: "ew-resize",
        userSelect: "none",
        background: "var(--surface)",
      }}
    >
      {/* DEFAULT side (full width, base layer) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--ivory-deep)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", width: "100%", maxWidth: 280 }}>
          {CUSTOMIZATION_PAIRS.map((p) => (
            <div
              key={p.before}
              style={{
                background: "rgba(23,22,27,0.035)",
                border: "1px dashed var(--charcoal-faint)",
                borderRadius: 10,
                padding: "0.6rem 0.9rem",
                fontSize: 12.5,
                color: "var(--charcoal-faint)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {p.before}
            </div>
          ))}
        </div>
      </div>

      {/* ENGINEERED side (clipped by slider) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
          background:
            "linear-gradient(135deg, rgba(30,63,214,0.06), var(--surface))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", width: "100%", maxWidth: 280 }}>
          {CUSTOMIZATION_PAIRS.map((p) => (
            <div
              key={p.after}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--accent-line)",
                borderRadius: 10,
                padding: "0.6rem 0.9rem",
                fontSize: 12.5,
                color: "var(--charcoal)",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
                boxShadow: "0 8px 20px -12px rgba(30,63,214,0.35)",
              }}
            >
              {p.after}
            </div>
          ))}
        </div>
      </div>

      {/* Handle */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: 2,
          background: "var(--accent)",
          transform: "translateX(-1px)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "var(--accent)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            boxShadow: "0 6px 18px rgba(30,63,214,0.4)",
          }}
        >
          ↔
        </div>
      </div>
    </div>
  );
}

export default function Customization() {
  const [ref, visible] = useReveal(0.15);
  return (
    <section className="section" style={{ background: "var(--ivory-deep)" }}>
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="custom-grid"
        >
          <div ref={ref} className={`reveal${visible ? " visible" : ""}`}>
            <div className="section-label">
              <span className="dot" />
              <span>Deep Customization</span>
              <span className="rule" />
            </div>
            <h2 className="section-title" style={{ fontSize: "clamp(1.9rem,3.6vw,2.8rem)" }}>
              Need WordPress to behave differently?
            </h2>
            <p className="section-sub">
              Existing WordPress → Analyze → Extend → Customize → Integrate →
              Optimize → Production. Drag the slider to see the shift from
              default to engineered.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.4rem" }}>
              {["Theme Customization", "Plugin Customization", "WooCommerce", "Elementor", "Gutenberg", "Custom PHP"].map(
                (t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <SliderPanel />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .custom-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
