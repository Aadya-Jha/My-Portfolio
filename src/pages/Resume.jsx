import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

const Resume = () => {
  return (
    <div className="min-h-screen bg-black-light overflow-x-hidden">
      <Navbar />
      <Topbar />

      <main className="max-w-6xl mx-auto px-6 md:px-16 pt-28 pb-24">
        
        <header className="mb-12 text-center">
          <h1 className="font-grotesk text-purple text-4xl md:text-5xl font-bold
            drop-shadow-[0_0_20px_rgba(166,74,201,0.5)]">
            Resume
          </h1>

          <p className="mt-3 text-white/60 text-sm md:text-base font-grotesk">
            A concise overview of my education, skills, and experience.
          </p>
        </header>

        <div
          className="
            relative
            rounded-2xl
            border border-white/10
            bg-gradient-to-b from-[#1c1924] to-[#13111a]
            shadow-[0_0_40px_rgba(166,74,201,0.15)]
            overflow-hidden
          "
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-purple/20 blur-[140px]" />
            <div className="absolute bottom-0 -right-32 w-[360px] h-[360px] bg-purple/10 blur-[140px]" />
          </div>

          <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9]">
            <iframe
              src="https://drive.google.com/file/d/1SF6uLw7Mn9JNNhOfOWDNCiiKjzOc0u6uEW-bXjzF1gU/preview"
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
        <a
            href="https://drive.google.com/uc?id=1SF6uLw7Mn9JNNhOfOWDNCiiKjzOc0u6uEW-bXjzF1gU&export=download"
            className="
            px-7 py-3 rounded-xl
            bg-purple text-white font-semibold font-grotesk
            hover:scale-105
            hover:shadow-[0_0_30px_rgba(166,74,201,0.6)]
            transition-all duration-300
            "
        >
            Download PDF
        </a>
        </div>

      </main>
    </div>
  );
};

export default Resume;
