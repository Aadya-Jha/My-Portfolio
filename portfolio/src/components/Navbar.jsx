import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="bg-black-dark min-h-screen w-20 fixed top-0 left-0 pl-10 pt-7 text-gray-300 ">
            <ul >
                <Link to="/skills">
                    <li className="transform rotate-90 origin-left mt-8 font-medium text-xl font-inter hover:cursor-pointer hover:text-white 
                        ">
                        Skills
                    </li>
                </Link>
                <Link to="/projects">
                    <li className="transform rotate-90 origin-left mt-16 font-medium text-xl font-inter hover:cursor-pointer">
                        Projects
                    </li>
                </Link>
                <Link to='/experience'>
                    <li className="transform rotate-90 origin-left mt-24 font-medium text-xl font-inter hover:cursor-pointer"> 
                        Experience
                    </li>
                </Link>
                <Link to="/education">
                    <li className="transform rotate-90 origin-left mt-32 font-medium text-xl font-inter hover:cursor-pointer">
                        Education
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;