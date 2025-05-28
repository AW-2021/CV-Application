import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import Experience from "./Experience";
import Education from "./Education";

const Form = ({ disabledVal }) => {
  const [inputs, setInputs] = useState({});

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
      className="h-auto min-h-[29.7cm] w-[21cm] p-5 flex flex-col gap-4 bg-white rounded-sm"
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
      <EducationSection disabledVal={disabledVal} />
      <ExperienceSection disabledVal={disabledVal} />
    </form>
  );
};

export default Form;
