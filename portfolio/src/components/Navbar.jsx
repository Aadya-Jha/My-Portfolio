import React from "react";

const Navbar = () => {
    return(
        <div className="bg-black-dark h-screen w-20 top-0 left-0 pl-10 pt-7 text-white">
            <ul >
                <li className="transform rotate-90 origin-left mt-5 font-semibold text-xl font-sans hover:cursor-pointer">Skills</li>
                <li className="transform rotate-90 origin-left mt-12 font-semibold text-xl font-sans hover:cursor-pointer">Projects</li>
                <li className="transform rotate-90 origin-left mt-20 font-semibold text-xl font-sans hover:cursor-pointer">Experience</li>
                <li className="transform rotate-90 origin-left mt-28 font-semibold text-xl font-sans hover:cursor-pointer">Education</li>
            </ul>
        </div>
    );
}

export default Navbar;