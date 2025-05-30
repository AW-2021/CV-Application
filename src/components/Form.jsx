import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

const Form = ({
  disabledVal,
  inputs,
  setInputs,
  educations,
  setEducations,
  experiences,
  setExperiences,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <form
      autoComplete="off"
      className="h-auto min-h-[29.7cm] w-[21cm] py-6 px-8 flex flex-col gap-2 bg-white rounded-sm"
    >
      <PersonalInfo
        disabledVal={disabledVal}
        inputs={inputs}
        handleChange={handleInputChange}
      />
      <Summary
        disabledVal={disabledVal}
        inputs={inputs}
        handleChange={handleInputChange}
      />
      <EducationSection
        disabledVal={disabledVal}
        educations={educations}
        setEducations={setEducations}
      />
      <ExperienceSection
        disabledVal={disabledVal}
        experiences={experiences}
        setExperiences={setExperiences}
      />
    </form>
  );
};

export default Form;
