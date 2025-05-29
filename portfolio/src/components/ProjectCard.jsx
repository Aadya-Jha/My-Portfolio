import React from "react";

const ProjectCard = (props) => {
    return(
        <div className="bg-black-dark border border-purple rounded-3xl p-6 shadow-[0_0_15px_4px_rgba(166,74,201,0.15)]
         hover:shadow-[0_0_25px_8px_rgba(166,74,201,0.4)] transition-shadow duration-300 w-full max-w-md flex flex-col gap-4">
            <img src="" alt="" 
            className="rounded-xl w-full h-48 object-cover shadow-md"/>
            <h2 className="text-purple text-2xl font-bold mb-1">{props.title}</h2>
            <span className="text-gray-300 text-sm">{props.description}</span>
            <span className="font-semibold">{props.stack}</span>
            <span className="text-purple hover:underline text-sm">Live / View</span>
            <span className="bg-purple/10 text-purple px-2 py-1 rounded-full">{props.tags}</span>
        </div>
    );
}

export default ProjectCard;