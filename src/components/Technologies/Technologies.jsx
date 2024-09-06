import React from "react";
import skills from "./technologiesData";

const Technologies = () => {
  return (
    <div className="lg:mb-72">
      <h1 className="text-2xl font-bold text-[#7764EA] text-center items-center md:text-4xl lg:mb-8">
        My Skills
      </h1>
      <div className="flex flex-wrap ml-10 text-white">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center   border-solid border-1 m-2 border-[#7764EA] border bg-transparent rounded-lg p-2 md:mt-8 lg:text-lg lg:m-4 lg:px-4   "
            style={{ minWidth: "120px" }}
          >
            {skill.icon && (
              <span className="flex items-center justify-center mr-2">
                {React.cloneElement(skill.icon, {
                  color: "#7764EA",
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
