const Experience = ({
  disabledVal,
  inputs,
  handleChange,
  newExpDesc,
  setNewExpDesc,
}) => {
  return (
    <fieldset className="border-b-2 pb-2" disabled={disabledVal}>
      {/* Every new experience field is a separate component */}
      <legend className="font-bold">EXPERIENCE</legend>
      <div className="w-full flex justify-between">
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
      </div>

      <div className="w-full flex justify-between">
        <div>
          <input
            name="companyRole"
            value={inputs.companyRole}
            onChange={handleChange}
          />
          ,
          <input
            name="jobType"
            value={inputs.jobType}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            name="expStartDate"
            value={inputs.expStartDate}
            onChange={handleChange}
          />
          -
          <input
            id="expEndDate"
            value={inputs.expEndDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <ul className="list-inside list-disc">
        {
          inputs.expDescList.map((desc) => (
              <li key={desc.id}>{desc.text}</li>
          ))
        }
        <li>
          <input
            name="expDescList"
            value={newExpDesc}
            onChange={(e) => setNewExpDesc(e.target.value)}
            onKeyDown={handleChange}
            className="w-11/12 focus:p-2"
          />
        </li>
      </ul>
    </fieldset>
  );
};

export default Experience;
