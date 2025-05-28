import { useState } from "react";

const Education = ({ itemIndex, educations, setEducations, handleChange }) => {
  const [newEduDesc, setNewEduDesc] = useState("");

  const handleAddDesc = (e) => {
    const { name, value } = e.target;

    if (e.key === "Enter") {
      e.preventDefault();
      const newValue = { id: Date.now(), text: value };

      setEducations((prevEducation) => {
        const newEducation = [...prevEducation];
        newEducation[itemIndex] = {
          ...newEducation[itemIndex],
          [name]: [...prevEducation[itemIndex]?.eduDescList || [], newValue],
        }
        return newEducation;
      })
      setNewEduDesc("");
    }
  };

  return (
    <>
      <div className="w-full flex justify-between">
        <input
          name="educationInstitute"
          value={educations[itemIndex]?.educationInstitute || ""}
          onChange={(e) => handleChange(e, itemIndex)}
          className="font-bold uppercase"
          placeholder="Brown University"
        />
        <input
          name="educationLocation"
          value={educations[itemIndex]?.educationLocation || ""}
          onChange={(e) => handleChange(e, itemIndex)}
          className="font-bold"
          placeholder="Rhode Island, USA"
        />
      </div>
      <div className="w-full flex justify-between">
        <div>
          <input
            name="educationDegree"
            value={educations[itemIndex]?.educationDegree || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            className="font-bold"
            placeholder="Bachelor of Industrial Design"
          />
          ,{" "}
          <input
            name="educationGrade"
            value={educations[itemIndex]?.educationGrade || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            className="font-bold"
            placeholder="CGPA 3.70 / 4.00"
          />
        </div>

        <div>
          <input
            name="eduStartDate"
            value={educations[itemIndex]?.eduStartDate || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            placeholder="Aug 2011"
            className="font-bold"
          />{" "}
          -{" "}
          <input
            name="eduEndDate"
            value={educations[itemIndex]?.eduEndDate || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            className="font-bold"
            placeholder="May 2015"
          />
        </div>
      </div>

      <ul className="list-inside list-disc w-full">
        {educations[itemIndex]?.eduDescList?.map((desc) => (
          <li key={desc.id}>{desc.text}</li>
        ))}
        <li>
          <input
            name="eduDescList"
            value={newEduDesc}
            onChange={(e) => setNewEduDesc(e.target.value)}
            onKeyDown={handleAddDesc}
            className="w-11/12 focus:p-2"
            placeholder="Write your academic achievements here."
          />
        </li>
      </ul>
    </>
  );
};

export default Education;
