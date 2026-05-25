import { useEffect, useRef, useState } from "react";
import SkillCard from "../components/SkillCard";

/* ── intersection observer hook ───────────────────────────────── */
const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

/* ── skill data ────────────────────────────────────────────────── */
const skillGroups = [
  {
    label: "Languages & Frameworks",
    icon: "{ }",
    skills: [
      { name: "Python",       level: 90 },
      { name: "JavaScript",   level: 88 },
      { name: "React.js",     level: 85 },
      { name: "Node.js",      level: 83 },
      { name: "Express.js",   level: 82 },
      { name: "Tailwind CSS", level: 80 },
      { name: "C",            level: 72 },
    ],
  },
  {
    label: "Tools & Platforms",
    icon: "⚙",
    skills: [
      { name: "AWS (Lambda · DynamoDB · SNS)", level: 78 },
      { name: "MongoDB",         level: 82 },
      { name: "PostgreSQL",      level: 75 },
      { name: "MySQL",           level: 74 },
      { name: "Git / GitHub",    level: 90 },
      { name: "Postman",         level: 85 },
      { name: "CI/CD Pipelines", level: 72 },
    ],
  },
  {
    label: "Concepts & Fundamentals",
    icon: "◈",
    skills: [
      { name: "REST APIs",            level: 90 },
      { name: "JWT Authentication",   level: 85 },
      { name: "Microservices",        level: 75 },
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "OOP",                  level: 85 },
      { name: "Computer Networks",    level: 72 },
      { name: "Operating Systems",    level: 70 },
    ],
  },
];

const conceptTags = [
  "REST APIs", "JWT Auth", "Microservices", "OOP",
  "DSA", "Computer Networks", "OS", "System Design",
];

/* ══════════════════════════════════════════════════════════════ */
export default function Skills() {
  const [sectionRef, inView] = useInView();

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{ padding: "120px 24px", maxWidth: 1280, margin: "0 auto", position: "relative" }}
    >
      {/* ── section label ── */}
      <div style={{
        display: "flex", alignItems: "center", gap: 14, marginBottom: 16,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: "#a64ac9", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          02 / Skills
        </span>
        <div style={{ width: 60, height: 1, background: "rgba(166,74,201,0.2)" }} />
      </div>

      {/* ── heading ── */}
      <h2 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "clamp(32px, 5vw, 52px)",
        fontWeight: 800, color: "#fff",
        letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.1,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease 80ms, transform 0.5s ease 80ms",
      }}>
        What I work with<span style={{ color: "#a64ac9" }}>.</span>
      </h2>

      <p style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 15,
        color: "rgba(255,255,255,0.4)", maxWidth: 480, lineHeight: 1.7, marginBottom: 56,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease 160ms, transform 0.5s ease 160ms",
      }}>
        A snapshot of the stack I use to take ideas from zero to production.
      </p>

      {/* ── cards grid ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 20,
      }}>
        {skillGroups.map((group, i) => (
          <SkillCard
            key={group.label}
            label={group.label}
            icon={group.icon}
            skills={group.skills}
            cardIndex={i}
            inView={inView}
          />
        ))}
      </div>

      {/* ── concept tag strip ── */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 10, marginTop: 48,
        opacity: inView ? 1 : 0,
        transition: "opacity 0.6s ease 500ms",
      }}>
        {conceptTags.map(tag => (
          <span key={tag} style={{
            padding: "5px 14px",
            borderRadius: 999,
            fontSize: 11,
            fontFamily: "monospace",
            background: "rgba(166,74,201,0.08)",
            color: "rgba(192,132,224,0.8)",
            border: "1px solid rgba(166,74,201,0.2)",
            letterSpacing: "0.05em",
          }}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}