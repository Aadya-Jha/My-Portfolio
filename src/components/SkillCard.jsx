import { useState } from "react";

/* ── animated bar ──────────────────────────────────────────────── */
export const Bar = ({ level, delay, inView }) => (
  <div style={{ position: "relative", height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
    <div style={{
      position: "absolute", inset: 0,
      width: inView ? `${level}%` : "0%",
      background: "linear-gradient(90deg, #7c22a8, #a64ac9, #c084e0)",
      borderRadius: 2,
      transition: `width 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      boxShadow: "0 0 8px rgba(166,74,201,0.6)",
    }} />
  </div>
);

/* ══════════════════════════════════════════════════════════════
   SkillCard — props:
   label      string   e.g. "Languages & Frameworks"
   icon       string   e.g. "{ }"
   skills     array    [{ name, level }]
   cardIndex  number   for staggered animation delay
   inView     bool     from parent's intersection observer
═══════════════════════════════════════════════════════════════ */
const SkillCard = ({ label, icon, skills = [], cardIndex = 0, inView = false }) => {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "rgba(12,10,18,0.7)",
        border: `1px solid ${hov ? "rgba(166,74,201,0.38)" : "rgba(166,74,201,0.18)"}`,
        borderRadius: 14,
        padding: "28px 28px 32px",
        backdropFilter: "blur(12px)",
        position: "relative",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${cardIndex * 120}ms, transform 0.6s ease ${cardIndex * 120}ms, border-color 0.3s`,
        boxShadow: hov ? "0 0 36px rgba(166,74,201,0.1)" : "none",
      }}
    >
      {/* corner glow */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0,
        width: 140, height: 140,
        background: `radial-gradient(circle at 0% 0%, rgba(166,74,201,${hov ? "0.15" : "0.07"}) 0%, transparent 70%)`,
        pointerEvents: "none",
        transition: "0.4s ease",
      }} />

      {/* header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <span style={{
          fontFamily: "monospace", fontSize: 15,
          color: "#a64ac9",
          width: 32, height: 32,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "1px solid rgba(166,74,201,0.3)",
          borderRadius: 6,
          background: "rgba(166,74,201,0.08)",
          flexShrink: 0,
        }}>
          {icon}
        </span>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12, fontWeight: 600,
          color: "rgba(255,255,255,0.45)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          margin: 0,
        }}>
          {label}
        </p>
      </div>

      {/* skill rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {skills.map((s, i) => (
          <div key={s.name}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 7 }}>
              <span style={{
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontSize: 12, color: "rgba(255,255,255,0.7)", letterSpacing: "0.02em",
              }}>
                {s.name}
              </span>
              <span style={{
                fontFamily: "monospace", fontSize: 10,
                color: "rgba(166,74,201,0.7)", letterSpacing: "0.05em",
              }}>
                {s.level}%
              </span>
            </div>
            <Bar
              level={s.level}
              delay={cardIndex * 120 + i * 60 + 200}
              inView={inView}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;