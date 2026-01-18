import React from "react";

const SkillCard = (props) => {
    return(
        <div
      className="relative h-40 w-40 bg-gradient-to-b from-[#1e1b25] to-[#151312] backdrop-blur-lg border border-purple/40  rounded-3xl
        shadow-[0_0_15px_4px_rgba(166,74,201,0.35)]  hover:shadow-[0_0_30px_10px_rgba(166,74,201,0.7)]  hover:scale-105
        transition-transform duration-300 ease-in-out cursor-pointer flex flex-col items-center justify-center p-6 mx-6
      "
    >
      {/* Soft purple glow behind image */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-purple opacity-20 blur-3xl"></div>

      <img
        src={props.img}
        alt={props.title}
        className="relative z-10 h-20 w-20 rounded-xl object-contain drop-shadow-md"
      />

      <span className="relative z-10 mt-5 text-white font-semibold text-lg tracking-wide font-inter text-center select-none">
        {props.title}
      </span>
    </div>
    );
}

export default SkillCard;