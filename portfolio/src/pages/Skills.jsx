import React from "react";
import SkillCard from "../components/SkillCard";
import {logos} from '../assets/images.js';

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


    return(
        <div className="bg-[#0a0a0a] min-h-screen w-full">
            <h1 className="font-inter font-extrabold flex justify-center text-[#A64AC9] text-4xl px-10 pt-5 ">Skills</h1>
             <h3 className="font-inter text-gray-400 font-light text-xl flex justify-center">Languages</h3>
            <div className="p-10 grid grid-cols-4">
            {languages.map((skill, index) => (
                <SkillCard key={index} title={skill.title} img={skill.img} />
            ))}
            </div>
            <h3 className="font-inter text-gray-400 font-light text-xl flex justify-center">Frontend</h3>
            <div className="p-10 grid grid-cols-4">
                {frontend.map((skill, index)=>(
                 <SkillCard key={index} title={skill.title} img={skill.img} />   
                ))}
            </div>
        </div>
    );
}

export default Skills;