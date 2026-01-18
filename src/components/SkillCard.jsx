const SkillCard = ({ icon, name }) => {
  return (
    <div
      className="
  shadow-[0_0_0_1px_rgba(255,255,255,0.03),_0_0_12px_rgba(166,74,201,0.12)]
  bg-gradient-to-b from-[#1c1924] to-[#13111a]

  flex items-center gap-3
  px-5 py-3
  rounded-xl
  border border-white/10
  text-white/90
  font-grotesk text-sm

  transition-all duration-300 ease-out

  /* Soft de-emphasis of siblings */
  group-hover:opacity-80
  hover:!opacity-100

  /* Themed focus */
  hover:border-purple/60
  hover:shadow-[0_0_20px_rgba(166,74,201,0.45)]
  hover:bg-gradient-to-b
  hover:from-[#221d2d]
  hover:to-[#18151f]
"


    >
      <img
        src={icon}
        alt={name}
        className="
          h-7 w-7
          object-contain
          opacity-90
          drop-shadow-[0_1px_1px_rgba(166,74,201,0.15)]
        "
      />
      <span className="whitespace-nowrap">{name}</span>
    </div>
  );
};

export default SkillCard;
