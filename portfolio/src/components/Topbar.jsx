import React from "react";
import { Link } from 'react-router-dom';
import githubIcon from "../assets/github-white.png";
import linkedinIcon from "../assets/linkedin-light.png";


const Topbar = () => {
    return (
        <div className="w-screen gap-4 ml-20 h-16 bg-black-light flex">
            <div>
                <ul className="flex pt-4 ">
                    <li className=" pl-2 pr-3 md:pl-12 md:pr-6 ">
                        <a href="https://github.com/Aadya-Jha">
                            <img 
                            className="hover:shadow-[0_0_16px_4px_#A64AC9] rounded-full h-6 w-6 md:h-8 md:w-8"
                            src={githubIcon} alt="" />
                        </a>
                    </li>
                    <li >
                        <a href="https://www.linkedin.com/in/aadya-jha-1232442a2/">
                            <img 
                            className="hover:shadow-[0_0_16px_4px_#A64AC9] rounded-lg h-6 w-6 md:h-8 md:w-8"
                            src={linkedinIcon} alt="" />
                        </a>
                    </li>
                    <li className="pl-3 md:pl-6 md:pr-6" >
                        <a href="mailto:aadya.aarchi@gmail.com">
                            <img 
                            className="hover:shadow-[0_0_16px_4px_#A64AC9] rounded-lg md:h-8 md:w-8 h-6 w-6"
                            src="./src/assets/gmail.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center items-center ml-auto ">
                <Link to="/resume">
                    <div className="border-2 border-purple mr-28 md:mr-36 mt-3 pl-6 pr-6 h-7 md:h-10 flex justify-center items-center rounded-xl
                     hover:bg-purple group hover:cursor-pointer">
                        <h2 className="text-purple font-semibold font-inter text-lg md:text-xl group-hover:text-white  ">Résumé</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Topbar;