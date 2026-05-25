import { motion } from "framer-motion";

/* Card animation */
const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const EducationCard = ({
  title,
  institution,
  period,
  description,
  gpa,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className="
        relative overflow-hidden
        rounded-2xl
        bg-gradient-to-b from-[#1c1924] to-[#13111a]
        border border-white/10
        px-7 py-7 md:px-9

        /* SINGLE controlled glow */
        shadow-[0_0_20px_rgba(166,74,201,0.14)]

        transition-all duration-300 ease-out
        hover:border-purple/50
        hover:shadow-[0_0_36px_rgba(166,74,201,0.32)]
      "
    >
      {/* Left accent */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-purple/80 to-purple/20" />

      {/* Content */}
      <h2 className="font-grotesk text-white text-2xl mb-1">
        {title}
      </h2>

      <h3 className="text-purple text-lg mb-1">
        {institution}
      </h3>

      <p className="text-white/60 text-sm mb-4">
        {period}
      </p>

      <p className="text-white/75 leading-relaxed">
        {description}
      </p>

      <div className="mt-4 text-purple font-semibold">
        {gpa}
      </div>

      {/* Soft ambient corner glow */}
      <div className="pointer-events-none absolute -bottom-28 -right-28 w-72 h-72 bg-purple/10 blur-[140px]" />
    </motion.div>
  );
};

export default EducationCard;
