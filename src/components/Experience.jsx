import { BsPlusCircleFill } from "react-icons/bs";

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
          className="font-bold uppercase"
          placeholder="CreativeMinds"
        />
        <input
          name="companyLocation"
          value={inputs.companyLocation}
          onChange={handleChange}
          className="font-bold"
          placeholder="San Francisco, USA"
        />
      </div>

      <div className="w-full flex justify-between">
        <div>
          <input
            name="companyRole"
            value={inputs.companyRole}
            onChange={handleChange}
            className="font-bold"
            placeholder="Senior Product Designer"
          />
          ,{" "}
          <input
            name="jobType"
            value={inputs.jobType}
            onChange={handleChange}
            className="font-bold"
            placeholder="Full time"
          />
        </div>

        <div>
          <input
            name="expStartDate"
            value={inputs.expStartDate}
            onChange={handleChange}
            placeholder="June 2021"
            className="font-bold"
          />{" "}
          -{" "}
          <input
            id="expEndDate"
            value={inputs.expEndDate}
            onChange={handleChange}
            className="font-bold"
            placeholder="Present"
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
            placeholder="Write your professional achievements and responsibilities here."
          />
        </li>
      </ul>
      {
        !disabledVal && (
          <button type="button" className="w-full p-1 mb-4 mt-4 border-2 border-blue-500 rounded-full">
            <BsPlusCircleFill className="inline text-lg text-blue-500 mr-2 align-text-top" />
            Add Experience
          </button>
        )
      }
    </fieldset>
  );
};

export default Experience;
