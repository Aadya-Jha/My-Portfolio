import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navItems = [
  { name: "About",      path: "/" },
  { name: "Skills",     path: "/skills" },
  { name: "Projects",   path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Education",  path: "/education" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <style>{`
        .nav-link {
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
          letter-spacing: 0.03em;
          border: 1px solid rgba(255,255,255,0.08);
          text-decoration: none;
          color: rgba(255,255,255,0.55);
          transition: color 0.25s, border-color 0.25s, background 0.25s, box-shadow 0.25s;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: #fff;
          border-color: rgba(166,74,201,0.4);
          background: rgba(166,74,201,0.05);
        }
        .nav-link.active {
          color: #a64ac9;
          border-color: rgba(166,74,201,0.55);
          background: rgba(166,74,201,0.08);
          box-shadow: 0 0 14px rgba(166,74,201,0.35);
        }
        .mobile-drawer {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease;
        }
        .mobile-drawer.open   { max-height: 400px; opacity: 1; }
        .mobile-drawer.closed { max-height: 0; opacity: 0; }
        .mobile-link {
          display: block;
          padding: 10px 14px;
          border-radius: 9px;
          font-size: 13px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
          letter-spacing: 0.03em;
          border: 1px solid rgba(255,255,255,0.07);
          text-decoration: none;
          color: rgba(255,255,255,0.55);
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .mobile-link:hover {
          color: #fff;
          border-color: rgba(166,74,201,0.35);
          background: rgba(166,74,201,0.05);
        }
        .mobile-link.active {
          color: #a64ac9;
          border-color: rgba(166,74,201,0.5);
          background: rgba(166,74,201,0.09);
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 16, left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50, width: "100%", padding: "0 16px",
        pointerEvents: "none",
      }}>
        <div style={{
          margin: "0 auto",
          width: "fit-content",
          maxWidth: "calc(100% - 32px)",
          pointerEvents: "all",
          background: "rgba(12,10,18,0.82)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${scrolled ? "rgba(166,74,201,0.28)" : "rgba(255,255,255,0.09)"}`,
          borderRadius: 14,
          padding: "10px 14px",
          boxShadow: scrolled
            ? "0 0 32px rgba(166,74,201,0.2), 0 8px 32px rgba(0,0,0,0.5)"
            : "0 8px 32px rgba(0,0,0,0.5)",
          transition: "border-color 0.4s, box-shadow 0.4s",
        }}>

          {/* top row */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>

            {/* logo */}
            <Link to="/" style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800, fontSize: 17,
              color: "#a64ac9", textDecoration: "none",
              marginRight: 10, letterSpacing: "-0.01em",
              flexShrink: 0,
            }}>
              AJ<span style={{ color: "#fff" }}>.</span>
            </Link>

            {/* desktop links — pure inline, no Tailwind */}
            {!isMobile && (
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`nav-link${location.pathname === item.path ? " active" : ""}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {/* mobile burger */}
            {isMobile && (
              <button
                onClick={() => setOpen(o => !o)}
                aria-label="Toggle menu"
                style={{
                  marginLeft: 8, background: "none", border: "none",
                  cursor: "pointer", padding: 4,
                  color: "rgba(255,255,255,0.7)",
                  display: "flex", alignItems: "center",
                }}
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            )}
          </div>

          {/* mobile drawer */}
          {isMobile && (
            <div className={`mobile-drawer ${open ? "open" : "closed"}`}>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 12 }}>
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`mobile-link${location.pathname === item.path ? " active" : ""}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;