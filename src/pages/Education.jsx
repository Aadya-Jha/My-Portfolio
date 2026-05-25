import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import EducationCard from "../components/EducationCard";

/* ── intersection observer hook ───────────────────────────────── */
const useInView = (threshold = 0.05) => {
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

/* ── data ──────────────────────────────────────────────────────── */
const education = [
  {
    index: "01",
    title: "Bachelor of Engineering in Computer Science",
    institution: "Dayananda Sagar College of Engineering",
    period: "2023 – 2027  ·  Bangalore, India",
    gpa: "9.76",
    description:
      "Relevant coursework: Data Structures & Algorithms, Operating Systems, Computer Networks & Security, AI/ML, and Cloud Computing & Security.",
  },
  {
    index: "02",
    title: "Higher Secondary School (Class XII)",
    institution: "Brilliant Public School",
    period: "2021 – 2023  ·  Bilaspur, Chhattisgarh, India",
    gpa: "91%",
    description:
      "Studied Physics, Chemistry, Mathematics and Computer Science. Developed a keen interest in programming and began learning Python during this period.",
  },
  {
    index: "03",
    title: "Primary & Secondary School (Class X)",
    institution: "Brilliant Public School",
    period: "2013 – 2021  ·  Bilaspur, Chhattisgarh, India",
    gpa: "97%",
    description:
      "Consistently ranked 1st in examinations. Participated in and won multiple inter-school competitions across academics and extracurriculars.",
  },
];

/* ══════════════════════════════════════════════════════════════ */
const Education = () => {
  const [listRef, inView] = useInView();

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>

      {/* ── ambient glows ── */}
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

      {/* ── grid bg ── */}
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

      <main style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "100px 24px 120px" }}>

        {/* ── header ── */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#a64ac9", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Education
            </span>
            <div style={{ width: 60, height: 1, background: "rgba(166,74,201,0.2)" }} />
          </div>

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 800, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.05, margin: "0 0 16px",
          }}>
            Academic background<span style={{ color: "#a64ac9" }}>.</span>
          </h1>

          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 15,
            color: "rgba(255,255,255,0.4)", maxWidth: 520, lineHeight: 1.75, margin: 0,
          }}>
            Milestones and coursework that shaped my foundation in computer science and engineering.
          </p>
        </div>

        {/* ── cards ── */}
        <div
          ref={listRef}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          {education.map((item, i) => (
            <EducationCard
              key={item.index}
              {...item}
              cardIndex={i}
              inView={inView}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Education;