import { useState } from "react";

/* ══════════════════════════════════════════════════════════════
   EducationCard props:
   title        string   degree/level name
   institution  string   school name
   period       string   date range + location
   gpa          string   score/percentage
   description  string   details
   index        number   for the counter label "01", "02"…
   inView       bool     triggers entrance animation
   cardIndex    number   stagger delay
═══════════════════════════════════════════════════════════════ */
const EducationCard = ({ title, institution, period, gpa, description, index = "01", inView = false, cardIndex = 0 }) => {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        background: "rgba(12,10,18,0.75)",
        border: `1px solid ${hov ? "rgba(166,74,201,0.42)" : "rgba(166,74,201,0.18)"}`,
        borderRadius: 16,
        padding: "32px 36px",
        backdropFilter: "blur(12px)",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${cardIndex * 130}ms, transform 0.65s ease ${cardIndex * 130}ms, border-color 0.3s`,
        boxShadow: hov ? "0 0 48px rgba(166,74,201,0.1)" : "none",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "0 24px",
        alignItems: "start",
      }}
    >
      {/* left glow */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0,
        width: 180, height: 180,
        background: `radial-gradient(circle at 0% 0%, rgba(166,74,201,${hov ? "0.16" : "0.07"}) 0%, transparent 70%)`,
        pointerEvents: "none", transition: "0.4s ease",
      }} />

      {/* ── left: text content ── */}
      <div>
        {/* index label */}
        <span style={{
          fontFamily: "monospace", fontSize: 10,
          color: "rgba(166,74,201,0.55)", letterSpacing: "0.22em",
          textTransform: "uppercase", display: "block", marginBottom: 10,
        }}>
          {index}
        </span>

        {/* degree */}
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(17px, 2.2vw, 22px)",
          fontWeight: 700, color: "#fff",
          letterSpacing: "-0.01em", margin: "0 0 6px", lineHeight: 1.25,
        }}>
          {title}
        </h3>

        {/* institution */}
        <p style={{
          fontFamily: "monospace", fontSize: 11,
          color: "#a64ac9", letterSpacing: "0.1em",
          textTransform: "uppercase", margin: "0 0 6px",
        }}>
          {institution}
        </p>

        {/* period */}
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 12,
          color: "rgba(255,255,255,0.35)", margin: "0 0 18px",
          letterSpacing: "0.03em",
        }}>
          {period}
        </p>

        {/* description */}
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 13,
          color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: 0,
          maxWidth: 600,
        }}>
          {description}
        </p>
      </div>

      {/* ── right: GPA badge ── */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "14px 20px",
        border: "1px solid rgba(166,74,201,0.25)",
        borderRadius: 10,
        background: "rgba(166,74,201,0.07)",
        minWidth: 80,
        flexShrink: 0,
        marginTop: 4,
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 18, fontWeight: 800,
          color: "#a64ac9", letterSpacing: "-0.01em", lineHeight: 1,
        }}>
          {gpa}
        </span>
        <span style={{
          fontFamily: "monospace", fontSize: 9,
          color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em",
          textTransform: "uppercase", marginTop: 5,
        }}>
          score
        </span>
      </div>
    </div>
  );
};

export default EducationCard;