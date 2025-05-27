import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Experience from "./Experience";

const ExperienceSection = ({ disabledVal }) => {
  const [experience, setExperience] = useState([]);
  const list = [];
  const [listLength, setListLength] = useState(1);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const newExperience = [...experience];
    newExperience[index] = {
      ...newExperience[index],
      [name]: value,
    };
    setExperience(newExperience);
  };

  const handleClick = () => {
    setListLength((prevLength) => prevLength + 1);
  };

  for (let i = 0; i < listLength; i++) {
    list.push(
      <Experience
        key={i}
        itemIndex={i}
        experience={experience}
        setExperience={setExperience}
        handleChange={handleChange}
      />
    );
  }

  return (
    <fieldset className="border-b-2 pb-2" disabled={disabledVal}>
      {/* Every new experience field is a separate component */}
      <legend className="font-bold">EXPERIENCE</legend>
      
      { list } 

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