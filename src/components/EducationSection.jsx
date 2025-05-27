import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Education from "./Education";

const EducationSection = ({ disabledVal }) => {
  const [education, setEducation] = useState([]);
  const list = [];
  const [listLength, setListLength] = useState(1);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const newEducation = [...education];
    newEducation[index] = {
      ...newEducation[index],
      [name]: value,
    };
    setEducation(newEducation);
  };

  const handleClick = () => {
    setListLength((prevLength) => prevLength + 1);
  };

  for (let i = 0; i < listLength; i++) {
    list.push(
      <Education
        key={i}
        itemIndex={i}
        education={education}
        setEducation={setEducation}
        handleChange={handleChange}
      />
    );
  }

  return (
    <fieldset className="border-b-2 pb-2" disabled={disabledVal}>
      <legend className="font-bold">EDUCATION</legend>

      {/* Every new education field is a separate component */}
      { list }

      {!disabledVal && (
        <button
          type="button"
          onClick={handleClick}
          className="w-full p-1 mb-4 mt-4 border-2 border-blue-500 rounded-full"
        >
          <BsPlusCircleFill className="inline text-lg text-blue-500 mr-2 align-text-top" />
          Add Education
        </button>
      )}
    </fieldset>
  );
};

export default EducationSection;
