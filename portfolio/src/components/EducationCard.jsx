import React from "react";


const EducationCard = (props) => {
    return(
      <div className="flex flex-col min-h-screen w-screen justify-center items-center bg-black-light py-10 px-4 ">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl bg-black-dark border-2 border-purple rounded-3xl shadow-xl p-10">
          <h3 className="text-purple text-3xl font-bold mb-4">{props.degree}</h3>
          <h2 className="text-white text-2xl font-semibold mb-2">{props.college}</h2>
          <h3 className="text-gray-300 text-xl mb-6">{props.course}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-lg text-gray-300">
            <p><span className="text-white font-medium">CGPA:</span> {props.cgpa}</p>
            <p><span className="text-white font-medium">Timeline:</span> {props.timeline}</p>
            <p><span className="text-white font-medium">Location:</span> {props.location}</p>
          </div>
        </div>
      </div>
  );
}

export default EducationCard;