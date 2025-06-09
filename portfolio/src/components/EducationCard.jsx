import React from "react";

const EducationCard = (props) => {
  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-start bg-black-light py-10 pr-0 md:pr-4 pl-0">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl bg-black-dark border-2 border-purple 
      rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 ml-0">
        <h3 className="text-purple text-xl md:text-3xl font-bold mb-4">{props.degree}</h3>
        <h2 className="text-white text-lg md:text-2xl font-semibold mb-2">{props.college}</h2>
        <h3 className="text-gray-300 text-md md:text-xl mb-6">{props.course}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-base sm:text-lg text-gray-300">
          <p>
            <span className="text-white font-medium">CGPA:</span> {props.cgpa}
          </p>
          <p>
            <span className="text-white font-medium">Timeline:</span> {props.timeline}
          </p>
          <p>
            <span className="text-white font-medium">Location:</span> {props.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
