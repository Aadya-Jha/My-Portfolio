import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import EducationCard from "../components/EducationCard";

const Education = () =>{

    const features = [
        {
            degree:"Bachelor of Engineering(B.E)",
            college:"Dayananda Sagar College of Engineering(DSCE)",
            course:"Computer Science(IoT, Cybersecurity & Blockchain)",
            cgpa:"9.88 CGPA",
            location: "Bengaluru, Karnataka",
            timeline:"2023-2027",
        },
        {
            degree:"High School",
            college:"Brilliant Public School",
            course: "PCMC",
            cgpa: "91.2%",
            location:"Bilaspur, CG",
            timeline:"2021-2023",
        }
    ];

    return(
       <div className="bg-black-light min-h-screen w-full overflow-x-hidden overflow-y-auto px-6">
            <Navbar />

            <div className="flex flex-col">
                <Topbar />
                <div className="w-full flex justify-center mb-10 py-10">
                <h1 className="text-purple text-5xl font-bold">Education</h1>
            </div>

            <div className="flex flex-col gap-8 items-center">
                {features.map((feature, index) => (
            <div key={index}
                className="bg-black-dark border border-purple rounded-2xl shadow-[0_0_20px_#A64AC966] p-6 w-full max-w-3xl"
            >
            <h2 className="text-white text-2xl font-semibold mb-1">{feature.degree}</h2>
            <h3 className="text-white text-xl mb-1">{feature.college}</h3>
            <p className="text-white text-lg italic mb-2">{feature.course}</p>

            <div className="flex justify-between text-purple text-sm font-medium">
                <span>{feature.cgpa}</span>
                <span>{feature.location}</span>
                <span>{feature.timeline}</span>
                </div>
            </div>
            ))}
        </div>
            </div>
        </div>

    );
}

export default Education;