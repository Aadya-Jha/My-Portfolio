import React from "react";

const ProjectCard = (props) => {
    return(
        <div className="bg-black-dark border border-purple rounded-3xl ml-24 mt-16 p-3 shadow-[0_0_12px_3px_rgba(166,74,201,0.15)]
         hover:shadow-[0_0_20px_6px_rgba(166,74,201,0.4)] transition-shadow duration-300 w-96 flex flex-col gap-2">

        <img
         src={props.img}
         alt={props.title}
         className="rounded-lg w-full h-28 object-cover shadow-sm"
        />
        <h2 className="text-white text-xl font-bold truncate font-inter">{props.title}</h2>
        <p className="text-gray-300 text-xs line-clamp-2 font-inter">{props.description}</p>
        <span className="font-semibold text-purple text-md font-inter">{props.stack}</span>
        <div className="flex gap-4 mt-1">
            <a
             href={props.link}
             target="_blank"
             rel="noopener noreferrer"
             className="text-white hover:underline text-md font-inter hover:[text-shadow:0_0_8px_rgba(166,74,201,0.8)]"
            >
             Live / View
            </a>
            <a
             href={props.github}
             target="_blank"
             rel="noopener noreferrer"
             className="text-white hover:underline text-md font-inter hover:[text-shadow:0_0_8px_rgba(166,74,201,0.8)]"
            >
             Github
            </a>
        </div>
    </div>
    );
}

export default ProjectCard;