import React from "react";
import skills from "./technologiesData";

const Technologies = () => {
  return (
    <div className="bg-gray-600">
      <h1 className="text-2xl font-bold text-[#00FF00] text-center items-center md:text-4xl lg:mb-8">
        My Skills
      </h1>
      <div className="flex flex-wrap ml-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center   border-solid border-1 m-2 border-[#00FF00] bg-gradient-to-r from-gray-200 to-gray-400 rounded-lg p-2 md:mt-8 lg:text-lg lg:m-4 lg:px-4 lg:hover:bg-gradient-to-r lg:hover:from-gray-400 lg:hover:to-gray-600 "
            style={{ minWidth: "120px" }}
          >
            {skill.icon && (
              <span className="flex items-center justify-center mr-2">
                {React.cloneElement(skill.icon, {
                  color: "#38a138",
                  size: "25px",
                })}
              </span>
            )}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
