import { useEffect, useRef } from "react";
import { ARCHITECTURE_LAYERS } from "../data/content";
import { gsap, ScrollTrigger } from "../gsapSetup";
import { usePrefersReducedMotion } from "../hooks/useReveal";

export default function Architecture() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const layerRefs = useRef([]);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );

      layerRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0.25, x: -18 },
          {
            opacity: 1,
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 55%",
              scrub: 0.6,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="architecture"
      className="section"
      style={{ background: "var(--ivory-deep)" }}
      ref={sectionRef}
    >
      <div className="wrap">
        <div className="section-label">
          <span className="dot" />
          <span>Engineering Stack</span>
          <span className="rule" />
        </div>
        <h2 className="section-title">
          I don't just use WordPress.
          <br />
          I build on top of it.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "0 2rem",
            marginTop: "3.2rem",
            maxWidth: 760,
          }}
        >
          <div
            style={{
              position: "relative",
              width: 2,
              background: "var(--line)",
            }}
          >
            <div
              ref={lineRef}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "var(--accent)",
                transform: "scaleY(0)",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            {ARCHITECTURE_LAYERS.map((layer, i) => (
              <div
                key={layer.label}
                ref={(el) => (layerRefs.current[i] = el)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                  paddingBottom: "0.2rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10.5,
                      color: "var(--accent-deep)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "var(--charcoal)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {layer.label}
                  </h4>
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "var(--charcoal-soft)",
                    lineHeight: 1.6,
                  }}
                >
                  {layer.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
