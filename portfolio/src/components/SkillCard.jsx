import React from "react";

const SkillCard = (props) => {
    return(
        <div className="h-32 w-32 flex flex-col items-center justify-center shadow-[0_4px_15px_rgba(166,74,201,0.5)] bg-[#18181b] rounded-2xl
        hover:bg-[#292524] m-5 overflow-hidden">
            <img className="h-16 w-16" src={props.img}  />
            <span className="font-sans text-center text-white font-semibold text-xl">{props.title}</span>
        </div>
    );
}

export default SkillCard;