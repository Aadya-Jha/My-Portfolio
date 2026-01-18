const SkillCard = ({ icon, name }) => {
  return (
    <div
      className="
        flex items-center gap-3
        px-4 py-2
        rounded-xl
        bg-gradient-to-b from-[#1b1822] to-[#14121a]
        border border-white/10
        text-white/90
        font-inter text-sm
        transition-all duration-300
        hover:border-purple/60
        hover:shadow-[0_0_18px_rgba(166,74,201,0.35)]
      "
    >
      <img
        src={icon}
        alt={name}
        className="h-5 w-5 object-contain opacity-90"
      />
      <span>{name}</span>
    </div>
  );
};

export default SkillCard;
