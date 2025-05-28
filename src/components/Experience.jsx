import { useState } from "react";

const Experience = ({ itemIndex, experiences, setExperiences, handleChange }) => {
  const [newExpDesc, setNewExpDesc] = useState("");

  const handleAddDesc = (e) => {
    const { name, value } = e.target;

    if (e.key === "Enter") {
      e.preventDefault();
      const newValue = { id: Date.now(), text: value };

      setExperiences((prevExperience) => {
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
    <div>
      <div className="w-full flex justify-between">
        <input
          name="companyName"
          value={experiences[itemIndex]?.companyName || ""}
          onChange={(e) => handleChange(e, itemIndex)}
          className="font-bold uppercase"
          placeholder="CreativeMinds"
        />
        <input
          name="companyLocation"
          value={experiences[itemIndex]?.companyLocation || ""}
          onChange={(e) => handleChange(e, itemIndex)}
          className="font-bold"
          placeholder="San Francisco, USA"
        />
      </div>

      <div className="w-full flex justify-between">
        <div>
          <input
            name="companyRole"
            value={experiences[itemIndex]?.companyRole || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            className="font-bold"
            placeholder="Senior Product Designer"
          />
          ,{" "}
          <input
            name="jobType"
            value={experiences[itemIndex]?.jobType || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            className="font-bold"
            placeholder="Full time"
          />
        </div>

        <div>
          <input
            name="expStartDate"
            value={experiences[itemIndex]?.expStartDate || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            placeholder="June 2021"
            className="font-bold"
          />{" "}
          -{" "}
          <input
            name="expEndDate"
            value={experiences[itemIndex]?.expEndDate || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            className="font-bold"
            placeholder="Present"
          />
        </div>
      </div>

      <ul className="list-inside list-disc">
        {experiences[itemIndex]?.expDescList?.map((desc) => (
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
    </div>
  );
};

export default Experience;
