import { useState, useRef, useLayoutEffect } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Experience from "./Experience";

const MAX_HEIGHT = 500;

const ExperienceSection = ({ disabledVal }) => {
  const [experiences, setExperiences] = useState([
    {
      id: 0,
      companyName: "",
      companyLocation: "",
      companyRole: "",
      jobType: "",
      expStartDate: "",
      expEndDate: "",
      expDescList: [],
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const newExperience = [...experiences];
    newExperience[index] = {
      ...newExperience[index],
      [name]: value,
    };
    setExperiences(newExperience);
  };

  const handleClick = () => {
    setExperiences((prev) => [
      ...prev,
      {
        id: experiences.length,
        companyName: "",
        companyLocation: "",
        companyRole: "",
        jobType: "",
        expStartDate: "",
        expEndDate: "",
        expDescList: [],
      },
    ]);
  };

  return (
    <fieldset className="border-b-2 pb-2" disabled={disabledVal}>
      <legend className="font-bold">EXPERIENCE</legend>

      {/* Every new experience field is a separate component */}
      {experiences.map((item) => (
        <Experience
          key={item.id}
          itemIndex={item.id}
          experiences={experiences}
          setExperiences={setExperiences}
          handleChange={handleChange}
        />
      ))}

      {!disabledVal && (
        <button
          type="button"
          onClick={handleClick}
          className="w-full p-1 mb-4 mt-4 border-2 border-blue-500 rounded-full"
        >
          <BsPlusCircleFill className="inline text-lg text-blue-500 mr-2 align-text-top" />
          Add Experience
        </button>
      )}
    </fieldset>
  );
};

export default ExperienceSection;
