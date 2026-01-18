import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import EducationCard from "../components/EducationCard";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Education = () => {
  const education = [
    {
      title: "Bachelor Of Engineering in Computer Science",
      institution: "Dayananda Sagar College Of Engineering",
      period: "2023 – 2027 | Bangalore, India",
      gpa: "9.88 CGPA",
      description:
        "Relevant courses included Data Structures and Algorithms, Python for Cybersecurity, End to end IoT Solutions, Computer Networks and Security, AI/ML, Cloud Computing and Security.",
    },
    {
      title: "Higher Secondary School",
      institution: "Brilliant Public School",
      period: "2021 – 2023 | Bilaspur, Chhattisgarh, India",
      gpa: "91%",
      description:
        "Completed the course in Physics, Chemistry, Math and Computer Science with 91% in 12th grade. Got interested in programming and learned python.",
    },
    {
      title: "Primary and Secondary School",
      institution: "Brilliant Public School",
      period: "2013 – 2021 | Bilaspur, Chhattisgarh, India",
      gpa: "97%",
      description:
        "Consistently ranked 1st in examinations and participated and won multiple inter-school competitions. Completed the course with 97% in 10th grade.",
    },
  ];

  return (
    <div className="bg-black-light min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Topbar />

      <main className="relative max-w-5xl mx-auto px-6 md:px-16 pt-24 pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 w-[360px] h-[360px] md:w-[520px] md:h-[520px] bg-purple/10 blur-[170px]" />
          <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-purple/5 blur-[160px]" />
        </div>

        <motion.header
          variants={sectionVariants}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <h1 className="font-grotesk text-white text-5xl md:text-6xl font-extrabold tracking-tight">
            Education<span className="text-purple">.</span>
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl font-grotesk">
            Academic background and milestones that shaped my foundation in
            computer science.
          </p>
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-12"
        >
          {education.map((item, i) => (
            <EducationCard key={i} {...item} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Education;
