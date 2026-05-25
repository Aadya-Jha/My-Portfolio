import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "About", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4">
      <div
        className="
          mx-auto max-w-fit
          bg-black-light/80 backdrop-blur-md
          border border-white/10
          shadow-[0_0_30px_rgba(0,0,0,0.6)]
          hover:shadow-[0_0_20px_rgba(166,74,201,0.3)]
          rounded-xl
          px-4 py-3
        "
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg font-bold font-grotesk text-purple"
          >
            AJ<span className="text-white">.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    px-3 py-1.5 rounded-md text-sm font-grotesk tracking-wide
                    border transition-all duration-300
                    ${
                      isActive
                        ? "border-purple text-purple shadow-[0_0_15px_rgba(166,74,201,0.6)]"
                        : "border-white/10 text-white/70 hover:text-white hover:border-purple/50"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white/80 hover:text-white transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="mt-4 flex flex-col gap-2 md:hidden animate-[fadeIn_0.2s_ease-out]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-grotesk
                    border transition-all duration-300
                    ${
                      isActive
                        ? "border-purple text-purple bg-purple/10"
                        : "border-white/10 text-white/70 hover:text-white hover:border-purple/50"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
