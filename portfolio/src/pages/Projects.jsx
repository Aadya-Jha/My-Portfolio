import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import ProjectCard from "../components/ProjectCard";
import {logos} from "../assets/images";

const Projects = () => {

    const projectDetails = [
        {
         img: logos.fundsyimg,
         title: "Fundsy: Edu-funding on blockchain",
         description: `Decentralized crowdfunding with transparent blockchain records and community support`,
         stack: "React-Tailwind-Solidity-FramerMotion" ,
         link: "https://fundsy.vercel.app/",
         github: "https://github.com/Aadya-Jha/fundsy"  
        },
        {
         img: logos.portfolioimg,
         title: "Portfolio",
         description: `A collection of my projects and skills demonstrating my experience`,
         stack: "React-Tailwind-FramerMotion" ,
         link: "https://aadya-jha.vercel.app/",
         github: "https://github.com/Aadya-Jha/My-Portfolio"
        }
    ]

    return(
        <div className="bg-black-light h-screen w-screen overflow-x-hidden overflow-y-auto">
            <Navbar />
            <Topbar />
            <h1 className="font-inter font-extrabold flex justify-center text-purple text-4xl px-10 pt-5 hover:drop-shadow-[0_0_10px_#A64AC9]">
                Projects
            </h1>
            <div className="flex flex-col items-center justify-center">
                {projectDetails.map((project, index) => (
                    <ProjectCard 
                     key={index}
                     img={project.img}
                     title={project.title}
                     description={project.description}
                     stack={project.stack}
                     link={project.link}
                     github={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;