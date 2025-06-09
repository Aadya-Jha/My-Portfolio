import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import EducationCard from "../components/EducationCard";

const Education = () => {
  const features = [
    {
      degree: "Bachelor of Engineering(B.E)",
      college: "Dayananda Sagar College of Engineering(DSCE)",
      course: "Computer Science(IoT, Cybersecurity & Blockchain)",
      cgpa: "9.88 CGPA",
      location: "Bengaluru, Karnataka",
      timeline: "2023-2027",
    },
    {
      degree: "High School",
      college: "Brilliant Public School",
      course: "PCMC",
      cgpa: "91.2%",
      location: "Bilaspur, Chhattisgarh",
      timeline: "2021-2023",
    },
  ];

  return (
    <div className="bg-black-light min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <Navbar />

      <div className="flex flex-col pl-[3rem] sm:pl-0 pr-4 sm:pr-8"> {/* Left pad for navbar */}
        <Topbar />

        <div className="w-full flex justify-center mb-10 py-10 px-4 sm:px-9">
          <h1 className="text-purple text-4xl sm:text-5xl font-bold text-center hover:drop-shadow-[0_0_10px_#A64AC9]">
            Education
          </h1>
        </div>

        <div className="flex flex-col gap-8 items-center sm:items-center"> {/* Centered again */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black-dark border border-purple rounded-2xl shadow-[0_0_20px_#A64AC966] p-4 sm:p-6 w-full max-w-3xl overflow-hidden break-words"
            >
              <h2 className="text-white text-xl sm:text-2xl font-semibold mb-1">
                {feature.degree}
              </h2>
              <h3 className="text-white text-lg sm:text-xl mb-1">
                {feature.college}
              </h3>
              <p className="text-white text-base sm:text-lg italic mb-2">
                {feature.course}
              </p>

              <div className="flex flex-wrap justify-between gap-2 text-purple text-sm sm:text-base font-medium">
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
};

export default Education;
