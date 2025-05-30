import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Education from "./Education";

const EducationSection = ({ disabledVal, educations, setEducations }) => {

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const newEducation = [...educations];
    newEducation[index] = {
      ...newEducation[index],
      [name]: value,
    };
    setEducations(newEducation);
  };

  const handleClick = () => {
    setEducations((prev) => [
      ...prev,
      {
        id: educations.length,
        educationInstitute: "",
        educationLocation: "",
        educationDegree: "",
        educationGrade: "",
        eduStartDate: "",
        eduEndDate: "",
        eduDescList: [],
      },
    ]);
  };

  return (
    <fieldset disabled={disabledVal}>
      <legend className="bg-blue-900 w-full text-center text-white mb-3 p-0.5">EDUCATION</legend>

      {/* Every new education field is a separate component */}
        {educations.map((item) => (
          <Education
            key={item.id}
            itemIndex={item.id}
            educations={educations}
            setEducations={setEducations}
            handleChange={handleChange}
          />
        ))}

      {!disabledVal && (
        <button
          type="button"
          onClick={handleClick}
          className="w-full p-1 mt-2 mb-3 border-2 border-blue-500 rounded-full"
        >
          <BsPlusCircleFill className="inline text-lg text-blue-500 mr-2 align-text-top" />
          Add Education
        </button>
      )}
    </fieldset>
  );
};

export default EducationSection;
