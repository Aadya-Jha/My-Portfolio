import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
      <div
        className="flex items-center gap-6 px-6 py-3 rounded-xl
        bg-black-light/80 backdrop-blur-md
        border border-white/10
        shadow-[0_0_30px_rgba(0,0,0,0.6)]
        hover:shadow-[0_0_20px_rgba(166,74,201,0.3)]
    "
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-bold font-grotesk text-purple mr-4"
        >
          AJ<span className="text-white">.</span>
        </Link>

        {/* Commands */}
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
    </nav>
  );
};

export default Navbar;
