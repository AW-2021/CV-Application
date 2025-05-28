import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import Experience from "./Experience";

const Form = ({ disabledVal }) => {
  const [inputs, setInputs] = useState({});
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

  const [overflowItems, setOverflowItems] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleExpChange = (e, index) => {
    const { name, value } = e.target;

    const newExperience = [...experiences];
    newExperience[index] = {
      ...newExperience[index],
      [name]: value,
    };
    setExperiences(newExperience);
  };

  return (
    <div>
      <form
        autoComplete="off"
        className="h-[29.7cm] w-[21cm] p-5 flex flex-col gap-4 bg-white rounded-sm overflow-y-hidden"
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
        <ExperienceSection
          disabledVal={disabledVal}
          experiences={experiences}
          setExperiences={setExperiences}
          handleChange={handleExpChange}
          setOverflowItems={setOverflowItems}
        />
      </form>
      
      <div className="h-[29.7cm] w-[21cm] mt-4 p-5 flex flex-col gap-4 bg-white rounded-sm overflow-y-hidden">
        <div className="bg-green-600">
          {overflowItems.map((item) => (
            <Experience
              key={item.id}
              itemIndex={item.id}
              experiences={experiences}
              setExperiences={setExperiences}
              handleChange={handleExpChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
