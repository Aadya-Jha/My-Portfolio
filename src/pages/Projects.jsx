import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import ProjectCard from "../components/ProjectCard";
import { logos } from "../assets/images";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Projects = () => {
  const projectDetails = [
    {
      img: logos.fundsyimg,
      title: "Fundsy",
      subtitle: "Edu-funding on Blockchain",
      description:
        "Decentralized crowdfunding platform with transparent blockchain records and community-driven funding.",
      stack: ["React", "Tailwind", "Solidity", "Framer Motion"],
      link: "https://fundsy.vercel.app/",
      github: "https://github.com/Aadya-Jha/fundsy",
    },
    {
      img: logos.portfolioimg,
      title: "Personal Portfolio",
      subtitle: "Developer Portfolio",
      description:
        "A curated showcase of my projects, skills, and experience with a focus on clean UI and motion.",
      stack: ["React", "Tailwind", "Framer Motion"],
      link: "https://aadya-jha.vercel.app/",
      github: "https://github.com/Aadya-Jha/My-Portfolio",
    },
  ];

  return (
    <div className="bg-black-light min-h-screen">
      <Navbar />
      <Topbar />

      <main className="max-w-6xl mx-auto px-6 md:px-16 pt-24 pb-24">
        {/* HEADER */}
        <motion.header
          variants={sectionVariants}
          initial="hidden"
          animate="show"
          className="mb-14"
        >
          <h1 className="font-grotesk text-white text-5xl md:text-6xl font-extrabold tracking-tight">
            Projects<span className="text-purple">.</span>
          </h1>
          <p className="mt-3 font-grotesk text-white/60 max-w-xl">
            Selected projects showcasing my approach to problem-solving, design,
            and engineering.
          </p>
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projectDetails.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Projects;
