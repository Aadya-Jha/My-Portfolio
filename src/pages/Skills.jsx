import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import SkillCard from "../components/SkillCard";
import { logos } from "../assets/images";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Skills = () => {
  const sections = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: logos.javascript },
        { name: "Python", icon: logos.python },
        { name: "Java", icon: logos.java },
        { name: "C", icon: logos.c },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: logos.react },
        { name: "HTML", icon: logos.html },
        { name: "CSS", icon: logos.css },
        { name: "Tailwind CSS", icon: logos.tailwind },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: logos.node },
        { name: "Express", icon: logos.express },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: logos.mongo },
        { name: "PostgreSQL", icon: logos.postgres },
        { name: "MySQL", icon: logos.sql },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: logos.git },
        { name: "GitHub", icon: logos.github },
        { name: "Postman", icon: logos.postman },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black-light">
      <Navbar />
      <Topbar />

      <main className="relative max-w-6xl mx-auto px-6 md:px-16 pt-20 pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-48 -left-48 w-[520px] h-[520px] rounded-full bg-purple/20 blur-[180px]" />
          <div className="absolute top-1/3 -right-48 w-[420px] h-[420px] rounded-full bg-cyan-400/10 blur-[180px]" />
        </div>

        <header className="mb-16">
          <h1 className="font-grotesk text-white text-5xl md:text-6xl font-extrabold tracking-tight">
            Skills<span className="text-purple">.</span>
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl">
            Technologies and tools I’ve worked with through projects and hands-on learning.
          </p>
        </header>


        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.section
              key={section.title}
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              className="relative"
              style={{
                transform: `translateX(${idx % 2 === 0 ? "0px" : "0px"})`,
              }}
            >
              <div className="relative mb-6 h-px overflow-hidden">
                <div className="absolute inset-0 bg-white/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple/60 to-transparent animate-divider" />
              </div>

              <h2 className="mb-5 text-md font-semibold font-grotesk tracking-wide text-white/80">
                {section.title}
              </h2>

              <motion.div
                className="flex flex-wrap gap-x-4 gap-y-3 group"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                {section.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <SkillCard name={skill.name} icon={skill.icon} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Skills;
