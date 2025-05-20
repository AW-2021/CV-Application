const Experience = ({
  disabledVal,
  inputs,
  handleChange,
  newExpDesc,
  setNewExpDesc,
}) => {
  return (
    <fieldset className="border-b-2" disabled={disabledVal}>
      {/* Every new experience field is a separate component */}
      <legend className="font-bold">EXPERIENCE</legend>
      <input
        name="companyName"
        value={inputs.companyName}
        onChange={handleChange}
      />
      <input
        name="companyLocation"
        value={inputs.companyLocation}
        onChange={handleChange}
      />
      <input
        name="companyRole"
        value={inputs.companyRole}
        onChange={handleChange}
      />
      <input 
        name="jobType" 
        value={inputs.jobType} 
        onChange={handleChange} />
      <input
        name="expStartDate"
        value={inputs.expStartDate}
        onChange={handleChange}
      />
      <input
        id="expEndDate"
        value={inputs.expEndDate}
        onChange={handleChange}
      />
      <ul className="list-inside list-disc">
        {/* {expDescList.map((desc) => (
              <li key={desc.id}>{desc.text}</li>
            ))} */}
      </ul>
      <input
        name="expDescList"
        value={newExpDesc}
        onChange={(e) => setNewExpDesc(e.target.value)}
        onKeyDown={handleChange}
        className="focus:bg-gray-200"
      />
    </fieldset>
  );
};

export default Experience;
