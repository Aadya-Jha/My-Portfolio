import React from "react";
import SkillCard from "../components/SkillCard";
import {logos} from '../assets/images.js';

const Skills = () => {

    const features = [
        {title:"React", img:logos.react},
        {title:"JavaScript", img:logos.javascript},
        {title:"Python", img:logos.python},
        {title:"Node.js", img:logos.node},
        {title:"Express", img:logos.express},
        {title:"Git", img:logos.git},
        {title:"GitHub", img:logos.github},
        {title:"Java", img:logos.java},
        {title:"HTML5", img:logos.html},
        {title:"CSS3", img:logos.css}
    ]

    return(
        <div className="bg-[#0a0a0a] min-h-screen w-full">
            <h1 className="font-inter font-extrabold text-[#A64AC9] text-4xl px-10 pt-5 ">Skills</h1>
            <div className="p-10 grid grid-cols-4">
            {features.map((skill, index) => (
                <SkillCard key={index} title={skill.title} img={skill.img} />
            ))}
            </div>
        </div>
    );
}

export default Skills;