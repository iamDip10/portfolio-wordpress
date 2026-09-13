import { useState } from "react";
import { REVIEWS } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function ReviewImage({ src, index }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 12.5, color: "var(--charcoal-faint)", fontFamily: "var(--font-mono)" }}>
          Review image unavailable — the hosted screenshot link may have
          expired. Replace with a local file in{" "}
          <code>src/data/content.js</code>.
        </p>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={`Trustpilot review ${index + 1}`}
      loading="lazy"
      onError={() => setErrored(true)}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
      }}
    />
  );
}

export default function Reviews() {
  const [ref, visible] = useReveal(0.15);
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % REVIEWS.length);
  const prev = () => setActive((p) => (p === 0 ? REVIEWS.length - 1 : p - 1));

  return (
    <section id="reviews" className="section" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div
          ref={ref}
          className={`reveal${visible ? " visible" : ""}`}
          style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span className="dot" />
            <span>Client Feedback</span>
          </div>
          <h2 className="section-title" style={{ maxWidth: "none" }}>
            Trusted by <span className="accent-text">clients</span>.
          </h2>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>
            Real Trustpilot reviews from real clients.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <button
            onClick={prev}
            aria-label="Previous review"
            data-cursor="PREV"
            className="review-nav-btn"
            style={navBtnStyle}
          >
            ←
          </button>

          <div
            style={{
              position: "relative",
              width: "min(100%, 640px)",
              minHeight: 420,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {REVIEWS.map((review, i) => {
              const isActive = i === active;
              return (
                <div
                  key={review.id}
                  className="card"
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scale(1)" : "scale(0.96)",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                    pointerEvents: isActive ? "auto" : "none",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.9rem 1.2rem",
                      borderBottom: "1px solid var(--line-soft)",
                    }}
                  >
                    <span className="tag">{review.platform}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10.5,
                        color: "var(--charcoal-faint)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")} / {String(REVIEWS.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--ivory-deep)",
                    }}
                  >
                    <ReviewImage src={review.image} index={i} />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={next}
            aria-label="Next review"
            data-cursor="NEXT"
            className="review-nav-btn"
            style={navBtnStyle}
          >
            →
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem", marginTop: "1.6rem" }}>
          {REVIEWS.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
              style={{
                width: i === active ? 20 : 7,
                height: 7,
                borderRadius: 999,
                border: "none",
                background: i === active ? "var(--accent)" : "var(--line)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .review-nav-btn { display: none; }
        }
      `}</style>
    </section>
  );
}

const navBtnStyle = {
  width: 44,
  height: 44,
  borderRadius: "50%",
  border: "1px solid var(--line)",
  background: "var(--surface)",
  color: "var(--charcoal)",
  cursor: "pointer",
  fontSize: 16,
  flexShrink: 0,
  transition: "border-color 0.2s, color 0.2s, transform 0.2s",
};
