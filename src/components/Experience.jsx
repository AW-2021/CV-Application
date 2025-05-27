import { useState } from "react";

const Experience = ({ itemIndex, experience, setExperience, handleChange }) => {
  const [newExpDesc, setNewExpDesc] = useState("");

  const handleAddDesc = (e) => {
    const { name, value } = e.target;

    if (e.key === "Enter") {
      const newValue = { id: Date.now(), text: value };

      setExperience((prevExperience) => {
        const newExperience = [...prevExperience];
        newExperience[itemIndex] = {
          ...newExperience[itemIndex],
          [name]: [...prevExperience[itemIndex]?.expDescList || [], newValue],
        }
        return newExperience;
      })
      setNewExpDesc("");
    }
  };
  
  return (
    <>
      <div className="w-full flex justify-between">
        <input
          name="companyName"
          value={experience[itemIndex]?.companyName || ""}
          onChange={(e) => handleChange(e, itemIndex)}
          className="font-bold uppercase"
          placeholder="CreativeMinds"
        />
        <input
          name="companyLocation"
          value={experience[itemIndex]?.companyLocation || ""}
          onChange={(e) => handleChange(e, itemIndex)}
          className="font-bold"
          placeholder="San Francisco, USA"
        />
      </div>

      <div className="w-full flex justify-between">
        <div>
          <input
            name="companyRole"
            value={experience[itemIndex]?.companyRole || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            className="font-bold"
            placeholder="Senior Product Designer"
          />
          ,{" "}
          <input
            name="jobType"
            value={experience[itemIndex]?.jobType || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            className="font-bold"
            placeholder="Full time"
          />
        </div>

        <div>
          <input
            name="expStartDate"
            value={experience[itemIndex]?.expStartDate || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            placeholder="June 2021"
            className="font-bold"
          />{" "}
          -{" "}
          <input
            name="expEndDate"
            value={experience[itemIndex]?.expEndDate || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            className="font-bold"
            placeholder="Present"
          />
        </div>
      </div>

      <ul className="list-inside list-disc">
        {experience[itemIndex]?.expDescList?.map((desc) => (
          <li key={desc.id}>{desc.text}</li>
        ))}
        <li>
          <input
            name="expDescList"
            value={newExpDesc}
            onChange={(e) => setNewExpDesc(e.target.value)}
            onKeyDown={handleAddDesc}
            className="w-11/12 focus:p-2"
            placeholder="Write your professional achievements and responsibilities here."
          />
        </li>
      </ul>
    </>
  );
};

export default Experience;
