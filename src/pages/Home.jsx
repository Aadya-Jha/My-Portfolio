import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/* ─── tiny hook: staggered mount flag ─────────────────────────── */
const useMount = (delay = 0) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, []);
  return visible;
};

/* ─── animated typing cursor ──────────────────────────────────── */
const Cursor = () => (
  <span
    style={{
      display: "inline-block",
      width: 2,
      height: "1.1em",
      background: "#a64ac9",
      marginLeft: 3,
      verticalAlign: "text-bottom",
      animation: "blink 1s step-end infinite",
    }}
  />
);

/* ─── floating tag pill ───────────────────────────────────────── */
const FloatTag = ({ children, style }) => (
  <span
    style={{
      position: "absolute",
      padding: "4px 12px",
      borderRadius: 999,
      fontSize: 11,
      fontFamily: "var(--font-mono, monospace)",
      background: "rgba(166,74,201,0.12)",
      color: "#c084e0",
      border: "1px solid rgba(166,74,201,0.35)",
      letterSpacing: "0.04em",
      backdropFilter: "blur(6px)",
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {children}
  </span>
);

/* ─── scan-line grid background ──────────────────────────────── */
const GridBg = () => (
  <div
    aria-hidden
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
      backgroundImage: `
        linear-gradient(rgba(166,74,201,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(166,74,201,0.04) 1px, transparent 1px)
      `,
      backgroundSize: "48px 48px",
    }}
  />
);

/* ─── corner bracket decoration ──────────────────────────────── */
const Bracket = ({ pos = "tl", size = 20 }) => {
  const styles = {
    tl: { top: 0, left: 0, borderTop: "1.5px solid #a64ac9", borderLeft: "1.5px solid #a64ac9" },
    tr: { top: 0, right: 0, borderTop: "1.5px solid #a64ac9", borderRight: "1.5px solid #a64ac9" },
    bl: { bottom: 0, left: 0, borderBottom: "1.5px solid #a64ac9", borderLeft: "1.5px solid #a64ac9" },
    br: { bottom: 0, right: 0, borderBottom: "1.5px solid #a64ac9", borderRight: "1.5px solid #a64ac9" },
  };
  return (
    <span
      aria-hidden
      style={{
        position: "absolute",
        width: size,
        height: size,
        ...styles[pos],
      }}
    />
  );
};

/* ══════════════════════════════════════════════════════════════ */
const Home = () => {
  const h1Ref = useRef(null);
  const show0 = useMount(80);
  const show1 = useMount(220);
  const show2 = useMount(420);
  const show3 = useMount(600);
  const show4 = useMount(800);

  /* subtle parallax on code card */
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  };
  const resetCard = () => {
    if (cardRef.current) cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      style={{ minHeight: "100vh", background: "#0a0a0f", overflowX: "hidden", position: "relative" }}
      className="w-full"
    >
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes floatA {
          0%,100%{transform:translateY(0px) rotate(-1deg)}
          50%{transform:translateY(-10px) rotate(1deg)}
        }
        @keyframes floatB {
          0%,100%{transform:translateY(0px) rotate(2deg)}
          50%{transform:translateY(-14px) rotate(-2deg)}
        }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(22px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes revealName {
          from{opacity:0;letter-spacing:0.3em}
          to{opacity:1;letter-spacing:-0.02em}
        }
        @keyframes scanline {
          0%{transform:translateY(-100%)}
          100%{transform:translateY(100vh)}
        }
        @keyframes glow-pulse {
          0%,100%{opacity:0.18}
          50%{opacity:0.32}
        }
        .nav-link-underline {
          position:relative;
          display:inline-block;
        }
        .nav-link-underline::after {
          content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;
          background:#a64ac9;transition:width 0.25s ease;
        }
        .nav-link-underline:hover::after{width:100%}
        .btn-primary {
          position:relative;overflow:hidden;
        }
        .btn-primary::before {
          content:'';position:absolute;inset:0;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent);
          transform:translateX(-100%);
          transition:transform 0.4s ease;
        }
        .btn-primary:hover::before{transform:translateX(100%)}
        .code-card {
          transition:transform 0.15s ease, box-shadow 0.15s ease;
          transform-style:preserve-3d;
        }
        .code-card:hover {
          box-shadow: 0 0 60px rgba(166,74,201,0.35), 0 0 120px rgba(166,74,201,0.15);
        }
        .tag-float-a { animation:floatA 4s ease-in-out infinite; }
        .tag-float-b { animation:floatB 5.5s ease-in-out infinite; }
        .line-num { color: rgba(166,74,201,0.4); user-select:none; margin-right: 16px; font-size: 11px; }
        .code-key { color:#c084e0; }
        .code-str { color:#86efac; }
        .code-bracket { color:rgba(255,255,255,0.3); }
        .code-indent { color:rgba(255,255,255,0.75); }
        .status-dot {
          width:6px;height:6px;border-radius:50%;
          background:#22c55e;
          box-shadow:0 0 6px #22c55e;
          animation:glow-pulse 2.5s ease-in-out infinite;
          display:inline-block;margin-right:6px;
        }
      `}</style>

      <GridBg />

      {/* ambient glow blobs */}
      <div aria-hidden style={{
        position:"fixed", top:"10%", left:"5%",
        width:500, height:500,
        borderRadius:"50%",
        background:"radial-gradient(circle, rgba(166,74,201,0.12) 0%, transparent 70%)",
        filter:"blur(40px)", pointerEvents:"none", zIndex:0,
        animation:"glow-pulse 6s ease-in-out infinite",
      }}/>
      <div aria-hidden style={{
        position:"fixed", bottom:"10%", right:"5%",
        width:360, height:360,
        borderRadius:"50%",
        background:"radial-gradient(circle, rgba(166,74,201,0.08) 0%, transparent 70%)",
        filter:"blur(40px)", pointerEvents:"none", zIndex:0,
        animation:"glow-pulse 8s ease-in-out infinite reverse",
      }}/>

      <div style={{ position:"relative", zIndex:1 }}>
        <Navbar />
        <Topbar />
      </div>

      <main style={{
        position:"relative", zIndex:1,
        maxWidth:1280, margin:"0 auto",
        padding:"0 24px",
        minHeight:"calc(100vh - 80px)",
        display:"flex", alignItems:"center",
      }}>
        <section style={{
          display:"grid",
          gridTemplateColumns:"1fr",
          gap:48,
          width:"100%",
          paddingTop:32,
          paddingBottom:32,
        }}
          className="lg:grid-cols-[1fr_440px]"
        >

          {/* ── LEFT: text ── */}
          <div style={{ display:"flex", flexDirection:"column", justifyContent:"center" }}>

            {/* status badge */}
            <div
              style={{
                display:"inline-flex", alignItems:"center",
                padding:"6px 14px",
                borderRadius:999,
                border:"1px solid rgba(166,74,201,0.25)",
                background:"rgba(166,74,201,0.06)",
                width:"fit-content",
                marginBottom:28,
                fontSize:12,
                color:"rgba(255,255,255,0.5)",
                fontFamily:"monospace",
                letterSpacing:"0.05em",
                opacity: show0 ? 1 : 0,
                animation: show0 ? "fadeUp 0.5s ease forwards" : "none",
              }}
            >
              <span className="status-dot" />
              open to opportunities
            </div>

            {/* greeting */}
            <p style={{
              color:"rgba(255,255,255,0.45)",
              fontSize:18,
              fontFamily:"'Space Grotesk', sans-serif",
              marginBottom:10,
              opacity: show1 ? 1 : 0,
              animation: show1 ? "fadeUp 0.5s ease forwards" : "none",
            }}>
              Hi, I'm
            </p>

            {/* name */}
            <h1
              ref={h1Ref}
              style={{
                fontSize:"clamp(52px, 8vw, 88px)",
                fontWeight:800,
                lineHeight:1.05,
                letterSpacing:"-0.02em",
                color:"#fff",
                fontFamily:"'Space Grotesk', sans-serif",
                marginBottom:8,
                opacity: show1 ? 1 : 0,
                animation: show1 ? "revealName 0.7s ease forwards" : "none",
              }}
            >
              Aadya Jha<span style={{ color:"#a64ac9" }}>.</span>
            </h1>

            {/* role line */}
            <p style={{
              fontSize:15,
              color:"#a64ac9",
              fontFamily:"monospace",
              letterSpacing:"0.12em",
              marginBottom:28,
              opacity: show2 ? 1 : 0,
              animation: show2 ? "fadeUp 0.5s ease forwards" : "none",
            }}>
              FULL STACK DEVELOPER <Cursor />
            </p>

            {/* bio */}
            <p style={{
              color:"rgba(255,255,255,0.65)",
              fontSize:16,
              lineHeight:1.75,
              maxWidth:520,
              fontFamily:"'Space Grotesk', sans-serif",
              marginBottom:40,
              opacity: show3 ? 1 : 0,
              animation: show3 ? "fadeUp 0.5s ease forwards" : "none",
            }}>
              Engineering student building backend systems, scalable web applications, and AI-powered developer
              tools with modern cloud technologies.{" "}
              <span style={{ color:"rgba(255,255,255,0.9)", borderBottom:"1px solid rgba(166,74,201,0.5)" }}>
                cloud infrastructure
              </span>{" "}
              and{" "}
              <span style={{ color:"rgba(255,255,255,0.9)", borderBottom:"1px solid rgba(166,74,201,0.5)" }}>
                system design
              </span>.
            </p>

            {/* CTAs */}
            <div style={{
              display:"flex", flexWrap:"wrap", gap:16,
              opacity: show4 ? 1 : 0,
              animation: show4 ? "fadeUp 0.5s ease forwards" : "none",
            }}>
              <Link
                to="/projects"
                className="btn-primary"
                style={{
                  padding:"12px 28px",
                  borderRadius:8,
                  background:"#a64ac9",
                  color:"#000",
                  fontWeight:700,
                  fontFamily:"'Space Grotesk', sans-serif",
                  fontSize:14,
                  letterSpacing:"0.02em",
                  textDecoration:"none",
                  transition:"transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 0 32px rgba(166,74,201,0.55)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                View Projects ↗
              </Link>

              <Link
                to="/resume"
                style={{
                  padding:"12px 28px",
                  borderRadius:8,
                  border:"1px solid rgba(166,74,201,0.5)",
                  color:"#a64ac9",
                  fontFamily:"'Space Grotesk', sans-serif",
                  fontWeight:600,
                  fontSize:14,
                  letterSpacing:"0.02em",
                  textDecoration:"none",
                  transition:"all 0.2s",
                  background:"transparent",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(166,74,201,0.1)";
                  e.currentTarget.style.borderColor = "#a64ac9";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(166,74,201,0.5)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Resume
              </Link>
            </div>

            {/* mini stat row */}
            <div style={{
              display:"flex", gap:32, marginTop:48,
              opacity: show4 ? 1 : 0,
              animation: show4 ? "fadeUp 0.5s ease forwards" : "none",
            }}>
              {[
                { n:"3+", label:"Projects shipped" },
                { n:"5+", label:"Technologies" },
                { n:"∞", label:"Things to build" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <p style={{ fontSize:22, fontWeight:700, color:"#fff", fontFamily:"'Space Grotesk', sans-serif", lineHeight:1 }}>{n}</p>
                  <p style={{ fontSize:12, color:"rgba(255,255,255,0.35)", marginTop:4, fontFamily:"monospace", letterSpacing:"0.05em" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: code card ── */}
          <div
            style={{ display:"flex", justifyContent:"center", alignItems:"center", position:"relative" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetCard}
          >
            {/* outer glow */}
            <div aria-hidden style={{
              position:"absolute",
              inset:"-20px",
              borderRadius:24,
              background:"radial-gradient(circle at 50% 50%, rgba(166,74,201,0.18) 0%, transparent 70%)",
              filter:"blur(30px)",
              pointerEvents:"none",
            }}/>

            {/* the card */}
            <div
              ref={cardRef}
              className="code-card"
              style={{
                position:"relative",
                width:"100%",
                maxWidth:420,
                background:"rgba(12,10,18,0.85)",
                border:"1px solid rgba(166,74,201,0.25)",
                borderRadius:14,
                overflow:"visible",
                backdropFilter:"blur(12px)",
                perspective:800,
              }}
            >
              {/* window chrome */}
              <div style={{
                display:"flex", alignItems:"center", gap:8,
                padding:"12px 16px",
                borderBottom:"1px solid rgba(166,74,201,0.15)",
              }}>
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#ff5f57" }}/>
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#febc2e" }}/>
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#28c840" }}/>
                <span style={{
                  marginLeft:"auto", fontSize:11,
                  color:"rgba(255,255,255,0.2)",
                  fontFamily:"monospace",
                  letterSpacing:"0.06em",
                }}>
                  developer.ts
                </span>
              </div>

              {/* code body */}
              <pre style={{
                padding:"20px 20px 24px",
                margin:0,
                fontFamily:"'JetBrains Mono', 'Fira Code', monospace",
                fontSize:13,
                lineHeight:1.75,
                color:"rgba(255,255,255,0.75)",
                overflowX:"auto",
              }}>
                <code>
{[
  [1, <><span className="code-key">const</span> <span style={{color:"#67e8f9"}}>developer</span> <span className="code-bracket">= {"{"}</span></>],
  [2, <><span style={{marginLeft:16}}><span className="code-key">name</span><span className="code-bracket">:</span> <span className="code-str">"Aadya Jha"</span><span className="code-bracket">,</span></span></>],
  [3, <><span style={{marginLeft:16}}><span className="code-key">role</span><span className="code-bracket">:</span> <span className="code-str">"Full Stack Dev"</span><span className="code-bracket">,</span></span></>],
  [4, <><span style={{marginLeft:16}}><span className="code-key">stack</span><span className="code-bracket">: [</span></span></>],
  [5, <><span style={{marginLeft:32}}><span className="code-str">"React"</span><span className="code-bracket">,</span></span></>],
  [6, <><span style={{marginLeft:32}}><span className="code-str">"Node.js"</span><span className="code-bracket">,</span></span></>],
  [7, <><span style={{marginLeft:32}}><span className="code-str">"AWS"</span><span className="code-bracket">,</span></span></>],
  [8, <><span style={{marginLeft:32}}><span className="code-str">"MongoDB"</span></span></>],
  [9, <><span style={{marginLeft:16}}><span className="code-bracket">],</span></span></>],
  [10, <><span style={{marginLeft:16}}><span className="code-key">currently</span><span className="code-bracket">:</span> <span className="code-str">"shipping"</span><span className="code-bracket">,</span></span></>],
  [11, <><span style={{marginLeft:16}}><span className="code-key">open</span><span className="code-bracket">:</span> <span style={{color:"#fb923c"}}>true</span></span></>],
  [12, <><span className="code-bracket">{"}"}</span><span style={{color:"#a64ac9"}}>;</span></>],
].map(([n, line]) => (
  <div key={n} style={{display:"flex", alignItems:"baseline"}}>
    <span className="line-num">{n}</span>
    <span>{line}</span>
  </div>
))}
                </code>
              </pre>

              {/* corner brackets */}
              <Bracket pos="tl" size={14}/>
              <Bracket pos="tr" size={14}/>
              <Bracket pos="bl" size={14}/>
              <Bracket pos="br" size={14}/>
            </div>

            {/* floating tags */}
            <FloatTag style={{ top:-18, right:24, animation:"floatA 4s ease-in-out infinite" }}>
              Backend
            </FloatTag>
            <FloatTag style={{ top:"42%", left:-32, animation:"floatB 5.5s ease-in-out infinite" }}>
              DSA
            </FloatTag>
            <FloatTag style={{ bottom:24, right:-20, animation:"floatA 3.5s ease-in-out infinite 0.8s" }}>
              React
            </FloatTag>
            <FloatTag style={{ bottom:-18, left:28, animation:"floatB 6s ease-in-out infinite 1.2s" }}>
              Node.js
            </FloatTag>
            <FloatTag style={{ top:64, left:-20, animation:"floatA 5s ease-in-out infinite 0.4s" }}>
              AWS
            </FloatTag>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Home;