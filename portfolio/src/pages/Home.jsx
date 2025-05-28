import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

const Home = () => {
    return (
        
        <div className="flex h-screen overflow-hidden">
            <Navbar />
            <div className="flex flex-col flex-grow">
            <Topbar />
            <div className="bg-black-light min-h-screen flex flex-row px-16 ml-20 pt-24 gap-12">
            <div className="flex flex-col w-2/3 ">
                <p className="text-white font-heading font-inter pt-4 text-4xl">Hi, I'm </p>
                <p className="text-5xl font-bold pt-3 font-inter text-purple">Aadya</p>
                <p className="font-inter text-xl text-white pt-5">Computer Science undergrad with a strong foundation in problem-solving and a passion for building impactful tech solutions.
                     I’m driven by curiosity and a constant desire to grow. I aim to contribute to a forward-thinking team where 
                     I can help drive innovation while evolving into a skilled and reliable Software Engineer.
                    <br />Let’s innovate, collaborate, and build the future together.
                </p>
                </div>
            <div className="w-1/3 h-96 flex justify-center items-center">
                <img src="../src/assets/aarchi.jpg" alt="profile-pic" 
                 className="h-56 w-56 flex justify-center items-center rounded-full shadow-[0_0_20px_3px_rgba(166,74,201,0.5)]
                hover:shadow-[0_0_17px_5px_rgba(166,74,201,0.5)]"
                />
            </div>
        </div>
        </div>
        </div>
    );
}

export default Home;