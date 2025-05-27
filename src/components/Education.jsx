import { useState } from "react";

const Education = ({ itemIndex, education, setEducation, handleChange }) => {
  const [newEduDesc, setNewEduDesc] = useState("");

  const handleAddDesc = (e) => {
    const { name, value } = e.target;

    if (e.key === "Enter") {
      const newValue = { id: Date.now(), text: value };

      setEducation((prevEducation) => {
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
          value={education[itemIndex]?.educationInstitute || ""}
          onChange={(e) => handleChange(e, itemIndex)}
          className="font-bold uppercase"
          placeholder="Brown University"
        />
        <input
          name="educationLocation"
          value={education[itemIndex]?.educationLocation || ""}
          onChange={(e) => handleChange(e, itemIndex)}
          className="font-bold"
          placeholder="Rhode Island, USA"
        />
      </div>
      <div className="w-full flex justify-between">
        <div>
          <input
            name="educationDegree"
            value={education[itemIndex]?.educationDegree || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            className="font-bold"
            placeholder="Bachelor of Industrial Design"
          />
          ,{" "}
          <input
            name="educationGrade"
            value={education[itemIndex]?.educationGrade || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            className="font-bold"
            placeholder="CGPA 3.70 / 4.00"
          />
        </div>

        <div>
          <input
            name="eduStartDate"
            value={education[itemIndex]?.eduStartDate || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            placeholder="Aug 2011"
            className="font-bold"
          />{" "}
          -{" "}
          <input
            name="eduEndDate"
            value={education[itemIndex]?.eduEndDate || ""}
            onChange={(e) => handleChange(e, itemIndex)}
            className="font-bold"
            placeholder="May 2015"
          />
        </div>
      </div>

      <ul className="list-inside list-disc w-full">
        {education[itemIndex]?.eduDescList?.map((desc) => (
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
