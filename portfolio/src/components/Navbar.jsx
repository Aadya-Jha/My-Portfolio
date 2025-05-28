import React from "react";

const Navbar = () => {
    return(
        <div className="bg-black-dark min-h-screen w-20 fixed top-0 left-0 pl-10 pt-7 text-gray-300 ">
            <ul >
                <li className="transform rotate-90 origin-left mt-8 font-medium text-xl font-inter hover:cursor-pointer hover:text-white 
                hover:border-r-4 hover:border-purple">
                    Skills
                </li>
                <li className="transform rotate-90 origin-left mt-16 font-medium text-xl font-inter hover:cursor-pointer">
                    Projects
                </li>
                <li className="transform rotate-90 origin-left mt-24 font-medium text-xl font-inter hover:cursor-pointer"> 
                    Experience
                </li>
                <li className="transform rotate-90 origin-left mt-32 font-medium text-xl font-inter hover:cursor-pointer">
                    Education
                </li>
            </ul>
        </div>
    );
}

export default Navbar;