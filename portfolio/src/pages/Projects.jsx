import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {

    const projectDetails = [
        {
            
        }
    ]

    return(
        <div className="bg-black-light h-screen w-screen overflow-x-hidden overflow-y-auto">
            <Navbar />
            <Topbar />
            <h1 className="font-inter font-extrabold flex justify-center text-[#A64AC9] text-4xl px-10 pt-5">Projects</h1>
            <div>

            </div>
        </div>
    );
}

export default Projects;