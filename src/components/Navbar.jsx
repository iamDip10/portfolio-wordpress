import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "0.7rem 0" : "1.3rem 0",
        transition: "padding 0.3s ease",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(18px)" : "none",
            border: scrolled ? "1px solid var(--line)" : "1px solid transparent",
            borderRadius: 999,
            padding: scrolled ? "0.55rem 0.6rem 0.55rem 1.1rem" : "0.55rem 0",
            transition: "all 0.35s ease",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => scrollTo("home")}
            data-cursor="TOP"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: "-0.02em",
              color: "var(--charcoal)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            DIP
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
              }}
            />
          </button>

          <div
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11.5,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--charcoal-soft)",
                  padding: "0.55rem 0.9rem",
                  borderRadius: 999,
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent-deep)";
                  e.currentTarget.style.background = "var(--accent-soft)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--charcoal-soft)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              className="btn btn-primary"
              onClick={() => scrollTo("contact")}
              style={{ marginLeft: "0.4rem", padding: "0.7rem 1.3rem" }}
            >
              Hire Me
            </button>
          </div>

          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "var(--charcoal)",
              color: "var(--ivory)",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--line)",
            padding: "1rem var(--edge) 1.4rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
            marginTop: "0.6rem",
          }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                background: "none",
                border: "none",
                textAlign: "left",
                padding: "0.8rem 0.2rem",
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--charcoal)",
                borderBottom: "1px solid var(--line-soft)",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
