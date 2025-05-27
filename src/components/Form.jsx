import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

const Form = ({ disabledVal }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <form
      autoComplete="off"
      className="h-[29.7cm] w-[21cm] p-5 flex flex-col gap-4 bg-white rounded-sm overflow-y-hidden"
    >
      <PersonalInfo
        disabledVal={disabledVal}
        inputs={inputs}
        handleChange={handleChange}
      />
      <Summary
        disabledVal={disabledVal}
        inputs={inputs}
        handleChange={handleChange}
      />
      <EducationSection
        disabledVal={disabledVal}
      />
      <ExperienceSection
        disabledVal={disabledVal}
      />
    </form>
  );
};

export default Form;
