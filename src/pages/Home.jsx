import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-black-light w-full overflow-x-hidden">
      <Navbar />
      <Topbar />
      <main className="max-w-7xl mx-auto px-6 md:px-16 min-h-screen flex items-center">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">


          {/* LEFT CONTENT */}
          <div>
            <p className="text-white/70 text-xl md:text-2xl font-grotesk">
              Hi, I’m
            </p>

            <h1 className="mt-2 font-grotesk text-white text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Aadya Jha<span className="text-purple">.</span>
            </h1>

            <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-xl font-grotesk">
              Computer Science undergrad focused on creating fast, scalable, and intuitive
              web applications. With hands-on experience in the MERN stack, I enjoy building
              products that balance performance with thoughtful user experience. I’m currently
              expanding my skill set in DevOps and system design.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-6">
              <button
                className="
                  px-6 py-3 rounded-lg
                  bg-purple text-black font-semibold
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(166,74,201,0.5)]
                  transition-all duration-300
                "
              >
                View Projects
              </button>

              <button
                className="
                  px-6 py-3 rounded-lg
                  border border-purple text-purple
                  hover:bg-purple hover:text-black
                  hover:scale-105
                  transition-all duration-300
                "
              >
                Resume
              </button>
            </div>
          </div>

          {/* RIGHT / BOTTOM VISUAL (RESPONSIVE) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">

              {/* AMBIENT GLOW */}
              <div className="absolute inset-0 bg-purple/20 rounded-full blur-[120px]" />

              {/* CODE CARD */}
              <div
                className="
                  relative
                  bg-black/70
                  border border-purple/30
                  rounded-xl
                  p-6
                  shadow-[0_0_40px_rgba(166,74,201,0.25)]
                "
              >
                <pre className="text-sm font-mono text-white/90 leading-relaxed">
{`const developer = {
  name: "Aadya",
  role: "CS Undergrad",
  focus: [
    "Backend",
    "DSA",
    "Web Dev"
  ],
  mindset: "Always learning"
};`}
                </pre>
              </div>

              {/* FLOATING PILLS */}
              <span className="absolute -top-4 right-6 px-3 py-1 rounded-full text-xs bg-purple/20 text-purple border border-purple/40 animate-float">
                Backend
              </span>

              <span className="absolute top-1/2 -left-6 px-3 py-1 rounded-full text-xs bg-purple/20 text-purple border border-purple/40 animate-floatSlow">
                DSA
              </span>

              <span className="absolute bottom-6 -right-6 px-3 py-1 rounded-full text-xs bg-purple/20 text-purple border border-purple/40 animate-float">
                React
              </span>

              <span className="absolute -bottom-4 left-10 px-3 py-1 rounded-full text-xs bg-purple/20 text-purple border border-purple/40 animate-floatSlow">
                Node.js
              </span>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Home;
