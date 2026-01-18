import { Link } from "react-router-dom";
import githubIcon from "../assets/github-white.png";
import linkedinIcon from "../assets/linkedin-light.png";
import gmailIcon from "../assets/gmail.png";

const Topbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="flex justify-center">
        <div
          className="mt-4 flex items-center gap-6 px-6 py-3 rounded-2xl
          bg-black-light/80 backdrop-blur-md
          border border-white/10
          shadow-[0_0_40px_rgba(0,0,0,0.6)]"
        >
          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/Aadya-Jha" target="_blank" rel="noreferrer">
              <img src={githubIcon} className="h-5 w-5 opacity-80 hover:opacity-100" />
            </a>
            <a href="https://www.linkedin.com/in/aadya-jha-1232442a2/" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} className="h-5 w-5 opacity-80 hover:opacity-100" />
            </a>
            <a href="mailto:aadya.aarchi@gmail.com">
              <img src={gmailIcon} className="h-5 w-5 opacity-80 hover:opacity-100" />
            </a>
          </div>

          <div className="h-6 w-px bg-white/20" />

          {/* Resume */}
          <Link
            to="/resume"
            className="px-4 py-2 rounded-lg border border-purple
            text-purple text-sm font-semibold
            hover:bg-purple hover:text-black transition"
          >
            Résumé
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
