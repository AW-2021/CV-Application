import { BsPlusCircleFill } from "react-icons/bs";

const Education = ({
  disabledVal,
  inputs,
  handleChange,
  newEduDesc,
  setNewEduDesc,
}) => {
  const handleClick = () => {
    
  }

  return (
    <fieldset className="border-b-2 pb-2" disabled={disabledVal}>
      <legend className="font-bold">EDUCATION</legend>
      {/* Every new education field is a separate component */}
      <div className="w-full flex justify-between">
        <input
          name="educationInstitute"
          value={inputs.educationInstitute}
          onChange={handleChange}
          className="font-bold uppercase"
          placeholder="Brown University"
        />
        <input
          name="educationLocation"
          value={inputs.educationLocation}
          onChange={handleChange}
          className="font-bold"
          placeholder="Rhode Island, USA"
        />
      </div>
      <div className="w-full flex justify-between">
        <div>
          <input
            name="educationDegree"
            value={inputs.educationDegree}
            onChange={handleChange}
            className="font-bold"
            placeholder="Bachelor of Industrial Design"
          />
          ,{" "}
          <input
            name="educationGrade"
            value={inputs.educationGrade}
            onChange={handleChange}
            className="font-bold"
            placeholder="CGPA 3.70 / 4.00"
          />
        </div>

        <div>
          <input
            name="eduStartDate"
            value={inputs.eduStartDate}
            onChange={handleChange}
            placeholder="Aug 2011"
            className="font-bold"
          />{" "}
          -{" "}
          <input
            name="eduEndDate"
            value={inputs.eduEndDate}
            onChange={handleChange}
            className="font-bold"
            placeholder="May 2015"
          />
        </div>
      </div>

      <ul className="list-inside list-disc w-full">
        {inputs.eduDescList?.map((desc) => (
          <li key={desc.id}>{desc.text}</li>
        ))}
        <li>
          <input
            name="eduDescList"
            value={newEduDesc}
            onChange={(e) => setNewEduDesc(e.target.value)}
            onKeyDown={handleChange}
            className="w-11/12 focus:p-2"
            placeholder="Write your academic achievements here."
          />
        </li>
      </ul>
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

export default Education;
