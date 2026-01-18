import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-black-light">
      {/* Terminal-style Navbar */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 pt-32">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">

          {/* LEFT SIDE */}
          <div>
            <p className="text-white/80 font-inter text-xl">
              Hi, I’m
            </p>

            <h1
              className="mt-2 text-4xl md:text-6xl lg:text-7xl font-bold text-purple
              drop-shadow-[0_0_25px_rgba(166,74,201,0.6)]"
            >
              Aadya Jha
            </h1>

            <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
              Computer Science undergraduate passionate about building meaningful,
              scalable software. I enjoy solving real-world problems, learning
              continuously, and collaborating with people who care about clean
              engineering and impact.
            </p>

            {/* CTA — SINGLE SOURCE OF TRUTH */}
            <div className="mt-10 flex gap-6">
              <button
                className="px-6 py-3 rounded-lg bg-purple text-black font-semibold
                hover:scale-105 hover:shadow-[0_0_30px_rgba(166,74,201,0.6)]
                transition-all duration-300"
              >
                View Projects
              </button>

              <button
                className="px-6 py-3 rounded-lg border border-purple text-purple
                hover:bg-purple hover:text-black hover:scale-105
                transition-all duration-300"
              >
                Resume
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[420px]">

              {/* Glow */}
              <div className="absolute inset-0 bg-purple/20 rounded-full blur-[120px]" />

              {/* Code Card */}
              <div
                className="relative bg-black/70 border border-purple/30 rounded-xl
                p-6 shadow-[0_0_40px_rgba(166,74,201,0.25)]"
              >
                <pre className="text-sm font-mono text-white/90 leading-relaxed">
{`const developer = {
  name: "Aadya",
  role: "CS Undergrad",
  interests: [
    "Backend",
    "Problem Solving",
    "Web Development"
  ],
  mindset: "Always learning"
};`}
                </pre>
              </div>

              {/* Pills — contained & stable */}
              <span
                className="absolute -top-5 right-6 px-3 py-1 rounded-full text-xs
                bg-purple/20 text-purple border border-purple/40"
              >
                Backend
              </span>

              <span
                className="absolute bottom-6 -left-6 px-3 py-1 rounded-full text-xs
                bg-purple/20 text-purple border border-purple/40"
              >
                DSA
              </span>

              <span
                className="absolute top-20 -right-6 px-3 py-1 rounded-full text-xs
                bg-purple/20 text-purple border border-purple/40"
              >
                React
              </span>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Home;
