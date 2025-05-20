
const Education = ({ disabledVal, inputs, handleChange, newEduDesc, setNewEduDesc }) => {
  return (
    <fieldset className="border-b-2" disabled={disabledVal}>
      <legend className="font-bold">EDUCATION</legend>
      {/* Every new education field is a separate component */}
      <input
        name="educationInstitute"
        value={inputs.educationInstitute}
        onChange={handleChange}
      />
      <input
        name="educationLocation"
        value={inputs.educationLocation}
        onChange={handleChange}
      />
      <input
        name="educationDegree"
        value={inputs.educationDegree}
        onChange={handleChange}
      />
      <input
        name="educationGrade"
        value={inputs.educationGrade}
        onChange={handleChange}
      />
      <input
        name="eduStartDate"
        value={inputs.eduStartDate}
        onChange={handleChange}
      />
      <input
        name="eduEndDate"
        value={inputs.eduEndDate}
        onChange={handleChange}
      />
      <input
        name="eduDescList"
        value={newEduDesc}
        onChange={(e) => setNewEduDesc(e.target.value)}
        onKeyDown={handleChange}
        className="focus:bg-gray-200"
      />
      <ul className="list-inside list-disc">
        {/* {inputs.eduDescList?.map((desc) => (
              <li key={desc.id}>{desc.text}</li>
            ))} */}
      </ul>
    </fieldset>
  );
};

export default Education;
