import Navbar from "../components/Navbar";
import SkillCard from "../components/SkillCard";
import { logos } from "../assets/images";

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
        { name: "MySQL", icon: logos.sql },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: logos.git },
        { name: "GitHub", icon: logos.github },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black-light">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 md:px-16 pt-32 pb-32">
        {/* Header */}
        <header className="mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-purple font-inter">
            Skills
          </h1>
          <p className="mt-4 text-white/65 max-w-2xl font-inter">
            Technologies I’ve worked with through coursework, projects,
            and hands-on experimentation.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-20">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-6 text-lg font-semibold text-white/80 font-inter">
                {section.title}
              </h2>

              <div className="flex flex-wrap gap-4">
                {section.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Skills;
