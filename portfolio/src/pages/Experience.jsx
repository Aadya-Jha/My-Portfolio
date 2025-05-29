import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

const Experience = () => {
    return(
        <div className="bg-black-light h-screen w-screen overflow-x-hidden overflow-y-auto">
            <Navbar />
            <Topbar />
            <h1 className="font-inter font-extrabold flex justify-center text-purple text-4xl px-10 pt-5 hover:drop-shadow-[0_0_10px_#A64AC9]">
                Experience
            </h1>
        </div>
    );
}

export default Experience;