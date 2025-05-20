const Education = ({
  disabledVal,
  inputs,
  handleChange,
  newEduDesc,
  setNewEduDesc,
}) => {
  return (
    <fieldset className="border-b-2 pb-2" disabled={disabledVal}>
      <legend className="font-bold">EDUCATION</legend>
      {/* Every new education field is a separate component */}
      <div className="w-full flex justify-between">
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
      </div>
      <div className="w-full flex justify-between">
        <div>
          <input
            name="educationDegree"
            value={inputs.educationDegree}
            onChange={handleChange}
          />
          ,
          <input
            name="educationGrade"
            value={inputs.educationGrade}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            name="eduStartDate"
            value={inputs.eduStartDate}
            onChange={handleChange}
          />{" "}
          -
          <input
            name="eduEndDate"
            value={inputs.eduEndDate}
            onChange={handleChange}
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
          />
        </li>
      </ul>
    </fieldset>
  );
};

export default Education;
