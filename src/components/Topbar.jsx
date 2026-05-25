import { Link } from "react-router-dom";
import githubIcon from "../assets/github-white.png";
import linkedinIcon from "../assets/linkedin-light.png";
import gmailIcon from "../assets/gmail.png";

const Topbar = () => {
  return (
    <header className="fixed top-4 right-4 z-40">
      <div
        className="
          flex items-center gap-6
          px-5 py-3
          rounded-2xl
          bg-black-light/80 backdrop-blur-md
          border border-white/10
          shadow-[0_0_40px_rgba(0,0,0,0.6)]
          hover:shadow-[0_0_20px_rgba(166,74,201,0.3)]

        "
      >
        {/* Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Aadya-Jha"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubIcon}
              className="h-7 w-7 opacity-80 hover:opacity-100 transition"
              alt="GitHub"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/aadya-jha-1232442a2/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              className="h-7 w-7 opacity-80 hover:opacity-100 transition"
              alt="LinkedIn"
            />
          </a>

          <a href="mailto:aadya.aarchi@gmail.com">
            <img
              src={gmailIcon}
              className="h-7 w-7 opacity-80 hover:opacity-100 transition"
              alt="Email"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
