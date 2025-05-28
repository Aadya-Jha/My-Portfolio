import React from "react";
import githubIcon from "../assets/github-white.png";
import linkedinIcon from "../assets/linkedin-light.png";


const Topbar = () => {
    return (
        <div className="w-screen h-16 bg-black-light flex">
            <div>
                <ul className="flex">
                    <li className="pl-6 pr-6 pt-2">
                        <a href="https://github.com/Aadya-Jha/My-Portfolio">
                            <img style={{ height: "30px", width: "30px" }} src={githubIcon} alt="" />
                        </a>
                    </li>
                    <li className="pt-2">
                        <a href="https://www.linkedin.com/in/aadya-jha-1232442a2/">
                            <img style={{ height: "30px", width: "30px" }} src={linkedinIcon} alt="" />
                        </a>
                    </li>
                    <li className="pl-6 pr-6 pt-2" >
                        <a href="mailto:aadya.aarchi@gmail.com">
                            <img style={{height: "30px", width: "30px" }} src="./src/assets/gmail.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="ml-auto border-2 border-purple mr-36 mt-3 pl-6 pr-6 flex justify-center items-center rounded-xl hover:bg-purple group
             hover:cursor-pointer">
                <h2 className="text-purple font-semibold text-xl group-hover:text-white  ">RESUME</h2>
            </div>
        </div>
    );
}

export default Topbar;