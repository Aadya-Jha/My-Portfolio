import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="bg-black-light min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Topbar />

      <main className="relative max-w-5xl mx-auto px-6 md:px-16 pt-24 pb-24 flex items-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple/10 blur-[170px]" />
          <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-purple/5 blur-[160px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <h1 className="font-grotesk text-white text-5xl md:text-6xl font-extrabold tracking-tight mb-10">
            Experience<span className="text-purple">.</span>
          </h1>

          <div
            className="
              relative
              max-w-3xl
              rounded-2xl
              bg-gradient-to-b from-[#1c1924] to-[#13111a]
              border border-white/10
              px-8 py-10

              shadow-[0_0_22px_rgba(166,74,201,0.16)]
            "
          >
            <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-purple/80 to-purple/20" />

            <span
              className="
                inline-block
                mb-6
                px-4 py-1.5
                text-sm
                font-grotesk font-medium
                rounded-full
                bg-purple/10
                text-purple
                border border-purple/30
                shadow-[0_0_14px_rgba(166,74,201,0.35)]
              "
            >
              Under Development
            </span>

            <p className="text-white/75 text-lg font-grotesk leading-relaxed max-w-2xl">
              I am currently focused on building strong foundations through
              hands-on projects, coursework, and consistent problem-solving.
              Actively seeking internship and early-career opportunities where
              I can contribute, learn from experienced engineers, and grow as a
              software developer.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Experience;
