import React from "react";
import SkillCard from "../components/SkillCard";
import {logos} from '../assets/images.js';
import Navbar from "../components/Navbar.jsx";
import Topbar from "../components/Topbar.jsx";

const Skills = () => {

    const languages = [
        {title:"Python", img:logos.python},
        {title:"Java", img:logos.java},
        {title:"JavaScript", img:logos.javascript},
        {title:"C", img:logos.c},
    ]

    const frontend = [
        {title:"React.js", img:logos.react},
        {title:"HTML5", img:logos.html},
        {title:"CSS", img:logos.css},
        {title:"TailwindCSS", img:logos.tailwind},
    ]

    const backend = [
        {title:"Node.js", img:logos.node},
        {title:"Express.js", img:logos.express},
    ]

    const database = [
        {title:"MongoDB", img:logos.mongo},
        {title:"MySQL", img:logos.sql},
    ]

    const tools = [
        {title:"Git", img:logos.git},
        {title:"GitHub", img:logos.github},
    ]


    return(
        <div className="overflow-x-hidden overflow-y-auto">
            <Navbar />
            <Topbar />
            <div className="bg-black-light min-h-screen w-full" >
                <h1 className="font-inter font-extrabold flex justify-center text-[#A64AC9] text-4xl px-10 pt-5 hover:drop-shadow-[0_0_10px_#A64AC9]">
                Skills
            </h1>
             <h3 className="font-inter text-gray-400 font-light text-xl flex justify-center">Languages</h3>
            <div className="p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-10">
            {languages.map((skill, index) => (
                <SkillCard key={index} title={skill.title} img={skill.img} />
            ))}
            </div>
            <h3 className="font-inter text-gray-400 font-light text-xl flex justify-center">Frontend</h3>
            <div className="p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-10">
                {frontend.map((skill, index)=>(
                 <SkillCard key={index} title={skill.title} img={skill.img} />   
                ))}
            </div>
            <h3 className="font-inter text-gray-400 font-light text-xl flex justify-center">Backend</h3>
            <div className="p-20 grid grid-cols-1 md:grid-cols-2 place-items-center gap-0">
                {backend.map((skill, index)=>(
                 <SkillCard key={index} title={skill.title} img={skill.img} />   
                ))}
            </div>
            <h3 className="font-inter text-gray-400 font-light text-xl flex justify-center">Database</h3>
            <div className="p-20 grid grid-cols-1 md:grid-cols-2 place-items-center gap-0">
                {database.map((skill, index)=>(
                 <SkillCard key={index} title={skill.title} img={skill.img} />   
                ))}
            </div>
            <h3 className="font-inter text-gray-400 font-light text-xl flex justify-center">Tools</h3>
            <div className="p-20 grid grid-cols-1 md:grid-cols-2 place-items-center gap-0">
                {tools.map((skill, index)=>(
                 <SkillCard key={index} title={skill.title} img={skill.img} />   
                ))}
            </div>
            </div>
        </div>
    );
}

export default Skills;