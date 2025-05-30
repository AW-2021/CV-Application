import { useState } from "react";

const Education = ({ itemIndex, educations, setEducations, handleChange }) => {
  const [newEduDesc, setNewEduDesc] = useState("");
  const [isEnterKey, setIsEnterKey] = useState(true);

  const handleAddDesc = (e) => {
    const { name, value } = e.target;

    if (e.key === "Enter" || !e.key) {
      if (value.trim() !== "") {
        e.preventDefault();
        const newValue = { id: Date.now(), text: value };

        setEducations((prevEducation) => {
          const newEducation = [...prevEducation];
          newEducation[itemIndex] = {
            ...newEducation[itemIndex],
            [name]: [
              ...(prevEducation[itemIndex]?.eduDescList || []),
              newValue,
            ],
          };
          return newEducation;
        });
        setNewEduDesc("");

        if (!e.key) {
          setIsEnterKey(false);
        }
      }
    }
  };

  return (
    <div className="mb-3">
      <div className="w-full flex justify-between mb-1">
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

      <div className="w-full flex justify-between mb-1">
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

      <ul className="list-inside list-disc w-full indent-3">
        {educations[itemIndex]?.eduDescList?.map((desc) => (
          <li key={desc.id} onClick={() => setIsEnterKey(true)}>{desc.text}</li>
        ))}
        {isEnterKey && (
          <li>
            <input
              name="eduDescList"
              value={newEduDesc}
              onChange={(e) => setNewEduDesc(e.target.value)}
              onKeyDown={handleAddDesc}
              onBlur={handleAddDesc}
              className="w-11/12 focus:p-2"
              placeholder="Write your academic achievements here."
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Education;
