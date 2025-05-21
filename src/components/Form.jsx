import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import EducationSection from "./EducationSection";
import Experience from "./Experience";

const Form = ({ disabledVal }) => {
  const [inputs, setInputs] = useState({
    eduDescList: [],
    expDescList: [],
  });

  const [newEduDesc, setNewEduDesc] = useState("");
  const [newExpDesc, setNewExpDesc] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "eduDescList" || name == "expDescList") {
      if (e.key === "Enter") {
        const newValue = { id: Date.now(), text: value };

        setInputs((prevInputs) => ({
          ...prevInputs,
          [name]: [...prevInputs[name], newValue],
        }));
        if (name === "eduDescList") {
          setNewEduDesc("");
        } else {
          setNewExpDesc("");
        }
      }
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    }
  };

  return (
    <form
      autoComplete="off"
      className="h-[29.7cm] w-[21cm] p-5 flex flex-col gap-4 bg-white rounded-sm"
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
        inputs={inputs}
        handleChange={handleChange}
        newEduDesc={newEduDesc}
        setNewEduDesc={setNewEduDesc}
      />
      <Experience
        disabledVal={disabledVal}
        inputs={inputs}
        handleChange={handleChange}
        newExpDesc={newExpDesc}
        setNewExpDesc={setNewExpDesc}
      />
    </form>
  );
};

export default Form;
