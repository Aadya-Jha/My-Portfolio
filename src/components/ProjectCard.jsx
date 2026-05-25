import { useState } from "react";

/* ── tag chip ──────────────────────────────────────────────────── */
const Tag = ({ label }) => (
  <span style={{
    padding: "4px 11px",
    borderRadius: 999,
    fontSize: 10,
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    background: "rgba(166,74,201,0.08)",
    color: "rgba(192,132,224,0.8)",
    border: "1px solid rgba(166,74,201,0.2)",
    letterSpacing: "0.05em",
    whiteSpace: "nowrap",
  }}>
    {label}
  </span>
);

/* ── link button ───────────────────────────────────────────────── */
const LinkBtn = ({ href, children, primary }) => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "8px 18px",
        borderRadius: 7,
        fontSize: 12,
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        letterSpacing: "0.04em",
        textDecoration: "none",
        transition: "all 0.2s ease",
        ...(primary ? {
          background: hov ? "#b85de0" : "#a64ac9",
          color: "#000",
          transform: hov ? "translateY(-2px)" : "none",
          boxShadow: hov ? "0 0 24px rgba(166,74,201,0.5)" : "none",
        } : {
          background: "transparent",
          color: hov ? "#a64ac9" : "rgba(255,255,255,0.4)",
          border: `1px solid ${hov ? "rgba(166,74,201,0.5)" : "rgba(255,255,255,0.1)"}`,
          transform: hov ? "translateY(-2px)" : "none",
        }),
      }}
    >
      {children}
    </a>
  );
};

/* ══════════════════════════════════════════════════════════════
   ProjectCard — two variants:
   featured={true}  → full-width card with bullets
   featured={false} → smaller grid card
═══════════════════════════════════════════════════════════════ */
const ProjectCard = ({
  index = "01",
  name,
  tagline,
  description,
  bullets = [],
  stack = [],
  links = { github: "#", preview: "#" },
  featured = false,
}) => {
  const [hov, setHov] = useState(false);

  if (featured) {
    return (
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          position: "relative",
          background: "rgba(12,10,18,0.8)",
          border: `1px solid ${hov ? "rgba(166,74,201,0.45)" : "rgba(166,74,201,0.18)"}`,
          borderRadius: 16,
          padding: "36px 36px 32px",
          backdropFilter: "blur(12px)",
          overflow: "hidden",
          cursor: "default",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: hov ? "0 0 48px rgba(166,74,201,0.12)" : "none",
        }}
      >
        {/* corner glow */}
        <div aria-hidden style={{
          position: "absolute", top: 0, left: 0,
          width: 220, height: 220,
          background: `radial-gradient(circle at 0% 0%, rgba(166,74,201,${hov ? "0.18" : "0.08"}) 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "0.4s ease",
        }} />

        {/* top row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
          <div>
            <span style={{
              fontFamily: "monospace", fontSize: 11,
              color: "rgba(166,74,201,0.6)", letterSpacing: "0.2em",
              display: "block", marginBottom: 8,
            }}>
              {index} / featured
            </span>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 800, color: "#fff",
              letterSpacing: "-0.02em", margin: 0, lineHeight: 1.1,
            }}>
              {name}<span style={{ color: "#a64ac9" }}>.</span>
            </h3>
            <p style={{
              fontFamily: "monospace", fontSize: 11,
              color: "rgba(166,74,201,0.7)", letterSpacing: "0.1em",
              marginTop: 6, textTransform: "uppercase",
            }}>
              {tagline}
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <LinkBtn href={links.github}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </LinkBtn>
            <LinkBtn href={links.preview} primary>Preview ↗</LinkBtn>
          </div>
        </div>

        {/* description */}
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 14,
          color: "rgba(255,255,255,0.55)", lineHeight: 1.75,
          marginBottom: 20, maxWidth: 720,
        }}>
          {description}
        </p>

        {/* bullets */}
        {bullets.length > 0 && (
          <ul style={{ margin: "0 0 24px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#a64ac9", fontFamily: "monospace", fontSize: 12, marginTop: 3, flexShrink: 0 }}>→</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
                  {b}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* stack tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {stack.map(t => <Tag key={t} label={t} />)}
        </div>
      </div>
    );
  }

  /* ── small card ── */
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        background: "rgba(12,10,18,0.7)",
        border: `1px solid ${hov ? "rgba(166,74,201,0.4)" : "rgba(166,74,201,0.15)"}`,
        borderRadius: 14,
        padding: "28px 28px 24px",
        backdropFilter: "blur(12px)",
        overflow: "hidden",
        display: "flex", flexDirection: "column", gap: 16,
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: hov ? "0 0 36px rgba(166,74,201,0.1)" : "none",
        height: "100%",
      }}
    >
      <div aria-hidden style={{
        position: "absolute", top: 0, right: 0,
        width: 130, height: 130,
        background: `radial-gradient(circle at 100% 0%, rgba(166,74,201,${hov ? "0.15" : "0.06"}) 0%, transparent 70%)`,
        pointerEvents: "none", transition: "0.4s ease",
      }} />

      <div>
        <span style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(166,74,201,0.5)", letterSpacing: "0.2em", display: "block", marginBottom: 8 }}>
          {index}
        </span>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", margin: "0 0 4px" }}>
          {name}<span style={{ color: "#a64ac9" }}>.</span>
        </h3>
        <p style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(166,74,201,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
          {tagline}
        </p>
      </div>

      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0, flex: 1 }}>
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {stack.map(t => <Tag key={t} label={t} />)}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <LinkBtn href={links.github}>GitHub</LinkBtn>
        <LinkBtn href={links.preview} primary>Preview ↗</LinkBtn>
      </div>
    </div>
  );
};

export default ProjectCard;