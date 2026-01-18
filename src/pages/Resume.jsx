import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

const Resume = () => {
    return(
        <div className="bg-black-light h-screen w-screen overflow-x-hidden overflow-y-auto">
            <Navbar />
            <Topbar />
            <h1 className="font-inter font-extrabold flex justify-center text-purple text-4xl px-10 pt-5 hover:drop-shadow-[0_0_10px_#A64AC9]">
                Résumé
            </h1>
            <div className=" flex justify-center items-center h-screen">
            <iframe src="https://drive.google.com/file/d/1SF6uLw7Mn9JNNhOfOWDNCiiKjzOc0u6uEW-bXjzF1gU/preview"
                className="h-5/6 w-2/3 flex items-center justify-center border-2 border-purple rounded-lg shadow-[0_0_8px_1px_#A64AC9]"
            frameborder="0"></iframe>
            </div>
        </div>
    );
}

export default Resume;