export function Footer() {
  return (
    <footer
      style={{
        background: "var(--charcoal)",
        padding: "2.4rem var(--edge)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 17,
          color: "var(--ivory)",
          marginBottom: "0.6rem",
        }}
      >
        DIP<span style={{ color: "#5b7bff" }}>.</span>
      </div>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: "0.4rem" }}>
        Dip Saha · WordPress Engineer · Dhaka, Bangladesh
      </p>
      <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.22)", fontFamily: "var(--font-mono)" }}>
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export function BackToTop({ progress }) {
  if (progress < 15) return null;
  return (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
