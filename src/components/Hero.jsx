import { Suspense } from "react";
import HeroScene from "./HeroScene";
import { CAPABILITY_STRIP } from "../data/content";
import {
  useIsMobile,
  usePrefersReducedMotion,
} from "../hooks/useReveal";

export default function Hero() {
  const mobile = useIsMobile(760);
  const reduced = usePrefersReducedMotion();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div id="home" style={{ overflow: "hidden" }}>
      <section
        style={{
          position: "relative",
          minHeight: mobile ? "auto" : "100vh",
          paddingTop: mobile ? "6.5rem" : "7rem",
          paddingBottom: mobile ? "2.5rem" : "0.75rem",
          overflow: "hidden",

          background: `
            radial-gradient(
              circle at 75% 35%,
              rgba(30,63,214,0.10),
              transparent 35%
            ),
            radial-gradient(
              circle at 20% 20%,
              rgba(30,63,214,0.045),
              transparent 30%
            ),
            var(--ivory)
          `,
        }}
      >
        {/* ============================================
            BACKGROUND GRID
        ============================================ */}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: mobile ? 0.18 : 0.3,

            backgroundImage: `
              linear-gradient(
                rgba(23,22,27,.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(23,22,27,.035) 1px,
                transparent 1px
              )
            `,

            backgroundSize: mobile
              ? "42px 42px"
              : "72px 72px",

            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 85%)",

            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 85%)",
          }}
        />

        {/* ============================================
            AMBIENT LIGHT
        ============================================ */}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",

            width: mobile ? 360 : 760,
            height: mobile ? 360 : 760,

            right: mobile ? "-55%" : "-15%",
            top: mobile ? "35%" : "4%",

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(30,63,214,.09), transparent 68%)",

            filter: mobile
              ? "blur(30px)"
              : "blur(50px)",

            pointerEvents: "none",
          }}
        />

        {/* ============================================
            MAIN WRAPPER
        ============================================ */}

        <div
          className="wrap"
          style={{
            position: "relative",
            zIndex: 2,

            display: "grid",

            gridTemplateColumns: mobile
              ? "1fr"
              : "minmax(0, .88fr) minmax(0, 1.12fr)",

            gap: mobile
              ? "1rem"
              : "0.5rem",

            alignItems: "center",

            minHeight: mobile
              ? "auto"
              : "calc(100vh - 7.75rem)",

            width: "100%",
          }}
        >
          {/* ============================================
              LEFT CONTENT
          ============================================ */}

          <div
            style={{
              position: "relative",
              zIndex: 20,

              maxWidth: 620,

              margin: mobile
                ? "0 auto"
                : undefined,

              textAlign: mobile
                ? "center"
                : "left",

              width: "100%",
            }}
          >
            {/* Availability */}

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,

                padding: mobile
                  ? "6px 11px"
                  : "6px 14px",

                marginBottom: mobile
                  ? "1.25rem"
                  : "1.5rem",

                border:
                  "1px solid var(--accent-line)",

                borderRadius: 999,

                background:
                  "rgba(30,63,214,.045)",

                backdropFilter:
                  "blur(10px)",

                maxWidth: "100%",
              }}
            >
              <span
                style={{
                  flexShrink: 0,

                  width: 6,
                  height: 6,

                  borderRadius: "50%",

                  background:
                    "var(--accent)",

                  boxShadow:
                    "0 0 0 4px rgba(30,63,214,.08)",
                }}
              />

              <span
                style={{
                  fontFamily:
                    "var(--font-mono)",

                  fontSize: mobile
                    ? 8.5
                    : 10,

                  letterSpacing:
                    ".13em",

                  lineHeight: 1.3,

                  textTransform:
                    "uppercase",

                  color:
                    "var(--accent-deep)",

                  whiteSpace: mobile
                    ? "normal"
                    : "nowrap",
                }}
              >
                Available for WordPress Engineering Work
              </span>
            </div>

            {/* =========================================
                HEADING
            ========================================= */}

            <h1
              style={{
                margin: 0,

                marginBottom: mobile
                  ? "1.15rem"
                  : "1.35rem",

                fontFamily:
                  "var(--font-display)",

                fontWeight: 700,

                fontSize: mobile
                  ? "clamp(3rem, 15vw, 4.4rem)"
                  : "clamp(3.5rem, 6vw, 5rem)",

                lineHeight: mobile
                  ? 0.94
                  : 0.98,

                letterSpacing:
                  "-0.05em",

                color:
                  "var(--charcoal)",
              }}
            >
              I Engineer
              <br />

              <span
                style={{
                  color:
                    "var(--accent)",

                  position:
                    "relative",
                }}
              >
                WordPress.
              </span>
            </h1>

            {/* =========================================
                DESCRIPTION
            ========================================= */}

            <p
              style={{
                margin: 0,

                marginLeft: mobile
                  ? "auto"
                  : 0,

                marginRight: mobile
                  ? "auto"
                  : 0,

                marginBottom: mobile
                  ? "1.65rem"
                  : "2rem",

                maxWidth: mobile
                  ? 440
                  : 510,

                fontSize: mobile
                  ? 14.5
                  : 16,

                lineHeight: mobile
                  ? 1.7
                  : 1.8,

                color:
                  "var(--charcoal-soft)",
              }}
            >
              From custom plugins and deep
              customization to complete
              production-ready websites — I
              build WordPress systems around
              the way businesses actually work.
            </p>

            {/* =========================================
                BUTTONS
            ========================================= */}

            <div
              style={{
                display: "flex",

                gap: mobile
                  ? ".65rem"
                  : ".8rem",

                flexWrap: "wrap",

                justifyContent: mobile
                  ? "center"
                  : "flex-start",
              }}
            >
              <button
                className="btn btn-primary"
                data-cursor="VIEW WORK"
                onClick={() =>
                  scrollTo("work")
                }
                style={{
                  minHeight: 50,

                  padding:
                    "0 1.35rem",

                  whiteSpace:
                    "nowrap",
                }}
              >
                View Work →
              </button>

              <button
                className="btn btn-secondary"
                onClick={() =>
                  scrollTo("contact")
                }
                style={{
                  minHeight: 50,

                  padding:
                    "0 1.35rem",

                  whiteSpace:
                    "nowrap",
                }}
              >
                Start a Project
              </button>
            </div>

            {/* =========================================
                CAPABILITY MICRO STRIP
            ========================================= */}

            <div
              style={{
                display: "flex",

                alignItems:
                  "center",

                justifyContent: mobile
                  ? "center"
                  : "flex-start",

                gap: mobile
                  ? ".8rem"
                  : "1.25rem",

                flexWrap: "wrap",

                marginTop: mobile
                  ? "1.6rem"
                  : "2.2rem",

                paddingBottom:
                  mobile ? "0" : "0.5rem",
              }}
            >
              {[
                "PLUGIN DEVELOPMENT",
                "CUSTOM THEMES",
                "FULL-STACK WORDPRESS",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",

                    alignItems:
                      "center",

                    gap: 6,

                    fontFamily:
                      "var(--font-mono)",

                    fontSize: mobile
                      ? 7
                      : 8,

                    letterSpacing:
                      ".1em",

                    color:
                      "var(--charcoal-soft)",

                    whiteSpace:
                      "nowrap",
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,

                      flexShrink: 0,

                      borderRadius:
                        "50%",

                      background:
                        "var(--accent)",
                    }}
                  />

                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ============================================
              INTERACTIVE SYSTEM
          ============================================ */}

          <div
            style={{
              position: "relative",

              width: "100%",

              height: mobile
                ? 390
                : 600,

              minWidth: 0,

              overflow: "visible",

              marginTop: mobile
                ? "-0.5rem"
                : 0,
            }}
            data-cursor="EXPLORE"
          >
            <Suspense fallback={null}>
              <HeroScene
                mobile={mobile}
                reduced={reduced}
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ==============================================
          MARQUEE
      ============================================== */}

      <div
        className="marquee"
        style={{
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div className="marquee-track">
          {[
            ...CAPABILITY_STRIP,
            ...CAPABILITY_STRIP,
          ].map((item, i) => (
            <span
              className="marquee-item"
              key={i}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}