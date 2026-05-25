import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import SkillCard from "../components/SkillCard";

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
      { name: "REST APIs",                    level: 90 },
      { name: "JWT Authentication",           level: 85 },
      { name: "Microservices",                level: 75 },
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "OOP",                          level: 85 },
      { name: "Computer Networks",            level: 72 },
      { name: "Operating Systems",            level: 70 },
    ],
  },
];

const conceptTags = ["REST APIs","JWT Auth","Microservices","OOP","DSA","Computer Networks","OS","System Design"];

export default function Skills() {
  const [sectionRef, inView] = useInView();

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>

      {/* ambient glows */}
      <div aria-hidden style={{
        position: "fixed", top: "8%", left: "3%",
        width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(166,74,201,0.1) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none", zIndex: 0,
      }} />
      <div aria-hidden style={{
        position: "fixed", bottom: "10%", right: "4%",
        width: 340, height: 340, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(166,74,201,0.07) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none", zIndex: 0,
      }} />

      {/* grid bg */}
      <div aria-hidden style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(166,74,201,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(166,74,201,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Topbar />
      </div>

      <main style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "100px 24px 120px" }}>

        {/* header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#a64ac9", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Skills
            </span>
            <div style={{ width: 60, height: 1, background: "rgba(166,74,201,0.2)" }} />
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 800, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.05, margin: "0 0 16px",
          }}>
            What I work with<span style={{ color: "#a64ac9" }}>.</span>
          </h1>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 15,
            color: "rgba(255,255,255,0.4)", maxWidth: 480, lineHeight: 1.75, margin: 0,
          }}>
            A snapshot of the stack I use to take ideas from zero to production.
          </p>
        </div>

        {/* cards */}
        <div
          ref={sectionRef}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}
        >
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

        {/* tag strip */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 10, marginTop: 48,
          opacity: inView ? 1 : 0,
          transition: "opacity 0.6s ease 500ms",
        }}>
          {conceptTags.map(tag => (
            <span key={tag} style={{
              padding: "5px 14px", borderRadius: 999, fontSize: 11,
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
      </main>
    </div>
  );
}