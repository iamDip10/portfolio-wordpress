import { Suspense } from "react";

import HeroScene from "./HeroScene";

import {
  CAPABILITY_STRIP,
} from "../data/content";

import {
  useIsMobile,
  usePrefersReducedMotion,
} from "../hooks/useReveal";

export default function Hero() {
  const mobile = useIsMobile(760);
  const reduced = usePrefersReducedMotion();

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <div id="home">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          position: "relative",

          minHeight: mobile
            ? "auto"
            : "100vh",

          paddingTop: mobile
            ? "5.75rem"
            : "7rem",

          paddingBottom: mobile
            ? "2.75rem"
            : "1rem",

          overflow: "hidden",

          background:
            "radial-gradient(ellipse 75% 65% at 72% 35%, rgba(30,63,214,0.09), transparent 68%), var(--ivory)",
        }}
      >

        {/* =================================================
            BACKGROUND GRID
        ================================================= */}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,

            pointerEvents: "none",

            opacity: mobile
              ? 0.18
              : 0.32,

            backgroundImage: `
              linear-gradient(
                rgba(23,22,27,.025) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(23,22,27,.025) 1px,
                transparent 1px
              )
            `,

            backgroundSize: mobile
              ? "36px 36px"
              : "72px 72px",

            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 80%)",

            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 80%)",
          }}
        />

        {/* =================================================
            BLUE AMBIENT LIGHT
        ================================================= */}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",

            width: mobile
              ? 280
              : 700,

            height: mobile
              ? 280
              : 700,

            right: mobile
              ? "-45%"
              : "-8%",

            top: mobile
              ? "18%"
              : "10%",

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(30,63,214,.075), transparent 68%)",

            filter: mobile
              ? "blur(18px)"
              : "blur(20px)",

            pointerEvents: "none",
          }}
        />

        {/* =================================================
            MAIN WRAPPER
        ================================================= */}

        <div
          className="wrap"
          style={{
            position: "relative",

            zIndex: 2,

            display: "grid",

            gridTemplateColumns: mobile
              ? "minmax(0, 1fr)"
              : "0.9fr 1.1fr",

            gap: mobile
              ? "2rem"
              : "1rem",

            alignItems: "center",

            minHeight: mobile
              ? "auto"
              : "calc(100vh - 8rem)",

            width: "100%",

            minWidth: 0,
          }}
        >

          {/* =================================================
              LEFT / MAIN CONTENT
          ================================================= */}

          <div
            style={{
              position: "relative",

              zIndex: 20,

              width: "100%",

              maxWidth: mobile
                ? "100%"
                : 600,

              minWidth: 0,
            }}
          >

            {/* =================================================
                AVAILABILITY
            ================================================= */}

            <div
              style={{
                display: "inline-flex",

                alignItems: "center",

                gap: 8,

                padding: mobile
                  ? "6px 10px"
                  : "6px 14px",

                marginBottom: mobile
                  ? "1.15rem"
                  : "1.5rem",

                maxWidth: "100%",

                border:
                  "1px solid var(--accent-line)",

                borderRadius: 999,

                background:
                  "rgba(30,63,214,.045)",

                backdropFilter:
                  "blur(10px)",

                WebkitBackdropFilter:
                  "blur(10px)",
              }}
            >

              <span
                style={{
                  width: 6,
                  height: 6,

                  flexShrink: 0,

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
                    ? 7.5
                    : 10,

                  letterSpacing: mobile
                    ? ".09em"
                    : ".14em",

                  textTransform:
                    "uppercase",

                  color:
                    "var(--accent-deep)",

                  lineHeight: 1.3,

                  whiteSpace: "nowrap",

                  overflow: "hidden",

                  textOverflow: "ellipsis",
                }}
              >
                Available for WordPress Engineering Work
              </span>

            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h1
              style={{
                margin: 0,

                marginBottom: mobile
                  ? "1.05rem"
                  : "1.35rem",

                fontFamily:
                  "var(--font-display)",

                fontWeight: 700,

                fontSize: mobile
                  ? "clamp(3rem, 15vw, 4.4rem)"
                  : "clamp(3.1rem, 6vw, 5rem)",

                lineHeight: mobile
                  ? 0.93
                  : 0.98,

                letterSpacing:
                  "-0.055em",

                color:
                  "var(--charcoal)",

                maxWidth: "100%",
              }}
            >
              I Engineer
              <br />

              <span
                style={{
                  color:
                    "var(--accent)",
                }}
              >
                WordPress.
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              style={{
                margin: 0,

                marginBottom: mobile
                  ? "1.55rem"
                  : "2rem",

                maxWidth: mobile
                  ? 560
                  : 510,

                fontSize: mobile
                  ? 15
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
              production-ready websites - I build WordPress systems around
              the way businesses actually work.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              style={{
                display: "flex",

                gap: mobile
                  ? ".65rem"
                  : ".8rem",

                flexDirection: mobile
                  ? "column"
                  : "row",

                width: "100%",

                maxWidth: mobile
                  ? 500
                  : "none",
              }}
            >

              <button
                className="btn btn-primary"
                data-cursor="VIEW WORK"
                onClick={() =>
                  scrollTo("work")
                }
                style={{
                  minHeight: mobile
                    ? 50
                    : undefined,

                  width: mobile
                    ? "100%"
                    : undefined,

                  justifyContent: "center",
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
                  minHeight: mobile
                    ? 50
                    : undefined,

                  width: mobile
                    ? "100%"
                    : undefined,

                  justifyContent: "center",
                }}
              >
                Start a Project
              </button>

            </div>

            {/* =================================================
                CAPABILITY MICRO STRIP
            ================================================= */}

            <div
              style={{
                display: "flex",

                gap: mobile
                  ? ".7rem"
                  : "1.25rem",

                flexWrap: "wrap",

                marginTop: mobile
                  ? "1.5rem"
                  : "2.2rem",

                paddingBottom: mobile
                  ? ".25rem"
                  : 0,
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
                      ".09em",

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

                      borderRadius: "50%",

                      background:
                        "var(--accent)",
                    }}
                  />

                  {item}

                </div>
              ))}

            </div>

          </div>

          {/* =================================================
              DESKTOP - ORIGINAL 3D SYSTEM
              
              IMPORTANT:
              This remains completely separate from mobile.
          ================================================= */}

          {!mobile && (
            <div
              style={{
                position: "relative",

                width: "100%",

                height: 610,

                minWidth: 0,

                overflow: "visible",
              }}
              data-cursor="EXPLORE"
            >

              <Suspense fallback={null}>
                <HeroScene
                  mobile={false}
                  reduced={reduced}
                />
              </Suspense>

            </div>
          )}

          {/* =================================================
              MOBILE - CLEAN ENGINEERING SYSTEM
              
              No 3D.
              No floating cards.
              No absolute-positioned modules.
              
              Purpose:
              Show the visitor what "WordPress Engineer"
              actually means in a compact visual hierarchy.
          ================================================= */}

          {mobile && (
            <div
              style={{
                width: "100%",

                marginTop: "0.25rem",

                position: "relative",
              }}
            >

              {/* =================================================
                  MOBILE SYSTEM HEADER
              ================================================= */}

              <div
                style={{
                  display: "flex",

                  alignItems: "center",

                  justifyContent:
                    "space-between",

                  marginBottom:
                    "0.75rem",

                  paddingBottom:
                    "0.7rem",

                  borderBottom:
                    "1px solid rgba(23,22,27,.10)",
                }}
              >

                <div
                  style={{
                    display: "flex",

                    alignItems: "center",

                    gap: 8,

                    fontFamily:
                      "var(--font-mono)",

                    fontSize: 8,

                    letterSpacing:
                      ".15em",

                    textTransform:
                      "uppercase",

                    color:
                      "var(--charcoal-soft)",
                  }}
                >

                  <span
                    style={{
                      width: 5,
                      height: 5,

                      borderRadius:
                        "50%",

                      background:
                        "var(--accent)",

                      boxShadow:
                        "0 0 10px rgba(30,63,214,.6)",
                    }}
                  />

                  WordPress Engineering

                </div>

                <div
                  style={{
                    fontFamily:
                      "var(--font-mono)",

                    fontSize: 8,

                    letterSpacing:
                      ".12em",

                    color:
                      "var(--accent)",
                  }}
                >
                  04 SYSTEMS
                </div>

              </div>

              {/* =================================================
                  MOBILE ENGINEERING PANEL
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",

                  border:
                    "1px solid rgba(23,22,27,.11)",

                  borderRadius: 20,

                  background:
                    "rgba(255,255,255,.68)",

                  backdropFilter:
                    "blur(14px)",

                  WebkitBackdropFilter:
                    "blur(14px)",

                  boxShadow:
                    "0 18px 50px rgba(23,22,27,.06)",

                  overflow: "hidden",
                }}
              >

                {/* TOP BLUE LINE */}

                <div
                  style={{
                    height: 3,

                    width: "100%",

                    background:
                      "linear-gradient(90deg, var(--accent), rgba(30,63,214,.08))",
                  }}
                />

                {/* PANEL INTRO */}

                <div
                  style={{
                    padding:
                      "1.15rem 1.15rem .85rem",
                  }}
                >

                  <div
                    style={{
                      fontFamily:
                        "var(--font-display)",

                      fontSize:
                        "clamp(1.25rem, 6vw, 1.6rem)",

                      fontWeight: 700,

                      letterSpacing:
                        "-.035em",

                      color:
                        "var(--charcoal)",

                      lineHeight: 1.05,

                      marginBottom:
                        ".45rem",
                    }}
                  >
                    What I engineer
                  </div>

                  <div
                    style={{
                      fontFamily:
                        "var(--font-body)",

                      fontSize: 12,

                      lineHeight: 1.55,

                      color:
                        "var(--charcoal-soft)",
                    }}
                  >
                    Custom WordPress systems,
                    from the core architecture
                    to the final user experience.
                  </div>

                </div>

                {/* =================================================
                    SYSTEM ROWS
                ================================================= */}

                <div
                  style={{
                    borderTop:
                      "1px solid rgba(23,22,27,.08)",
                  }}
                >

                  {[
                    {
                      number: "01",
                      title: "PLUGINS",
                      text:
                        "Custom functionality, hooks, APIs and automation.",
                    },

                    {
                      number: "02",
                      title: "THEMES",
                      text:
                        "Custom interfaces, templates and responsive experiences.",
                    },

                    {
                      number: "03",
                      title: "INTEGRATIONS",
                      text:
                        "REST APIs, third-party services and business workflows.",
                    },

                    {
                      number: "04",
                      title: "COMMERCE",
                      text:
                        "WooCommerce customization, checkout and product logic.",
                    },
                  ].map(
                    (item, index) => (
                      <div
                        key={item.number}
                        style={{
                          display: "grid",

                          gridTemplateColumns:
                            "38px minmax(0, 1fr)",

                          gap: 12,

                          padding:
                            "0.9rem 1.15rem",

                          borderBottom:
                            index !== 3
                              ? "1px solid rgba(23,22,27,.07)"
                              : "none",
                        }}
                      >

                        {/* NUMBER */}

                        <div
                          style={{
                            width: 34,
                            height: 34,

                            borderRadius: 10,

                            display: "flex",

                            alignItems:
                              "center",

                            justifyContent:
                              "center",

                            background:
                              "rgba(30,63,214,.07)",

                            color:
                              "var(--accent)",

                            fontFamily:
                              "var(--font-mono)",

                            fontSize: 9,

                            fontWeight: 700,
                          }}
                        >
                          {item.number}
                        </div>

                        {/* CONTENT */}

                        <div
                          style={{
                            minWidth: 0,
                          }}
                        >

                          <div
                            style={{
                              fontFamily:
                                "var(--font-mono)",

                              fontSize: 9,

                              letterSpacing:
                                ".12em",

                              color:
                                "var(--charcoal)",

                              marginBottom:
                                ".3rem",
                            }}
                          >
                            {item.title}
                          </div>

                          <div
                            style={{
                              fontFamily:
                                "var(--font-body)",

                              fontSize: 11,

                              lineHeight: 1.45,

                              color:
                                "var(--charcoal-soft)",
                            }}
                          >
                            {item.text}
                          </div>

                        </div>

                      </div>
                    )
                  )}

                </div>

                {/* =================================================
                    BOTTOM SYSTEM STATUS
                ================================================= */}

                <div
                  style={{
                    display: "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "space-between",

                    padding:
                      ".8rem 1.15rem",

                    background:
                      "rgba(30,63,214,.035)",

                    borderTop:
                      "1px solid rgba(30,63,214,.08)",
                  }}
                >

                  <div
                    style={{
                      display: "flex",

                      alignItems:
                        "center",

                      gap: 7,

                      fontFamily:
                        "var(--font-mono)",

                      fontSize: 7.5,

                      letterSpacing:
                        ".13em",

                      color:
                        "var(--charcoal-soft)",
                    }}
                  >

                    <span
                      style={{
                        width: 5,
                        height: 5,

                        borderRadius:
                          "50%",

                        background:
                          "var(--accent)",

                        boxShadow:
                          "0 0 10px rgba(30,63,214,.7)",
                      }}
                    />

                    SYSTEM ONLINE

                  </div>

                  <div
                    style={{
                      fontFamily:
                        "var(--font-mono)",

                      fontSize: 7.5,

                      letterSpacing:
                        ".11em",

                      color:
                        "var(--accent)",
                    }}
                  >
                    BUILD / CUSTOMIZE / LAUNCH
                  </div>

                </div>

              </div>

            </div>
          )}

        </div>

      </section>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <div
        className="marquee"
        style={{
          width: "100%",

          maxWidth: "100%",

          overflow: "hidden",
        }}
      >

        <div className="marquee-track">

          {[
            ...CAPABILITY_STRIP,
            ...CAPABILITY_STRIP,
          ].map(
            (item, i) => (
              <span
                className="marquee-item"
                key={i}
              >
                {item}
              </span>
            )
          )}

        </div>

      </div>

    </div>
  );
}