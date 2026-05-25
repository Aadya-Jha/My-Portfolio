import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";

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

/* ── project data ──────────────────────────────────────────────── */
const FEATURED = [
  {
    index: "01",
    name: "SpendLens",
    tagline: "AWS Cost Anomaly Explainer",
    description:
      "Serverless AWS pipeline that triggers daily via EventBridge, fetches cost anomalies from AWS Cost Explorer API, deduplicates events using DynamoDB, and sends AI-generated analysis and remediation recommendations via SNS using Groq AI (Llama 3.3 70B).",
    bullets: [
      "Infrastructure-as-code via AWS SAM for reproducible one-command deployment.",
      "Flask REST API + dashboard visualizing anomaly history, service-wise cost impact & severity metrics.",
      "Self-hosted open-source — deployable to any AWS account; landing page via GitHub Pages.",
    ],
    stack: ["AWS SAM", "Lambda", "DynamoDB", "SNS", "EventBridge", "Flask", "Groq AI"],
    links: { github: "https://github.com/Aadya-Jha/SpendLens", preview: "https://aadya-jha.github.io/SpendLens/" },
  },
  {
    index: "02",
    name: "Cronie",
    tagline: "Cron-as-a-Service Job Scheduling Platform",
    description:
      "Distributed job scheduling engine in Node.js/Express with MongoDB persistence, supporting user-defined webhook triggers, execution tracking, and full job history via REST APIs.",
    bullets: [
      "JWT auth, role-based access control, and rate limiting for production-grade security.",
      "React dashboard with real-time cron validation and full job lifecycle controls.",
      "AI-powered natural language → cron expression parser with server-side safety validation.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "React", "JWT", "REST API"],
    links: { github: "https://github.com/Aadya-Jha/Cronie", preview: "https://cronie.onrender.com/" },
  },
];

const REST = [
  {
    index: "03",
    name: "Patch Patrol",
    tagline: "AI-Powered Dependency Vulnerability Monitor",
    description:
      "GitHub Webhook pipeline that detects dependency changes, runs transitive vulnerability analysis, auto-creates Issues with AI fix suggestions, and sends Slack alerts with security scorecards on every PR.",
    bullets: [
      "AI-powered vulnerability prioritization with risk explanations and safe upgrade recommendations beyond basic CVE severity scoring.",
      "React dashboard with dependency insights, security scorecards, visualizations, and real-time Slack alerts for vulnerability tracking.",
      "Built using Node.js, Express, React, PostgreSQL, and GitHub Webhooks API for automated dependency monitoring workflows.",
    ],
    stack: ["Node.js", "Express", "React", "GitHub Webhooks", "AI"],
    links: { github: "https://github.com/Aadya-Jha/patch-patrol", preview: "https://patch-patrol-client.vercel.app/" },
  },
  // ← add more non-featured projects here
];

/* ══════════════════════════════════════════════════════════════ */
export default function Projects() {
  const [sectionRef, inView] = useInView();

  return (
    <section
      id="projects"
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
          03 / Projects
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
        Things I've built<span style={{ color: "#a64ac9" }}>.</span>
      </h2>

      <p style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 15,
        color: "rgba(255,255,255,0.4)", maxWidth: 480, lineHeight: 1.7, marginBottom: 56,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease 160ms, transform 0.5s ease 160ms",
      }}>
        Production-grade projects spanning cloud infra, scheduling engines, and security tooling.
      </p>

      {/* ── featured — full width stacked ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 20 }}>
        {FEATURED.map((p, i) => (
          <div
            key={p.name}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(32px)",
              transition: `opacity 0.6s ease ${i * 150}ms, transform 0.65s ease ${i * 150}ms`,
            }}
          >
            <ProjectCard {...p} featured={true} />
          </div>
        ))}
      </div>

      {/* ── rest — grid ── */}
      {REST.length > 0 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {REST.map((p, i) => (
            <div
              key={p.name}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${(FEATURED.length + i) * 150}ms, transform 0.6s ease ${(FEATURED.length + i) * 150}ms`,
              }}
            >
              <ProjectCard {...p} featured={false} />
            </div>
          ))}
        </div>
      )}

      {/* ── bottom GitHub CTA ── */}
      <div style={{
        marginTop: 56, display: "flex", alignItems: "center", gap: 16,
        opacity: inView ? 1 : 0,
        transition: "opacity 0.6s ease 700ms",
      }}>
        <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.06)" }} />
        <a
          href="https://github.com/aadyajha"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "monospace", fontSize: 12,
            color: "rgba(166,74,201,0.7)", letterSpacing: "0.12em",
            textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "#a64ac9"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(166,74,201,0.7)"}
        >
          More on GitHub ↗
        </a>
        <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.06)" }} />
      </div>
    </section>
  );
}