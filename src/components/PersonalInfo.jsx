const PersonalInfo = ({ disabledVal, inputs, handleChange }) => {
  return (
    <fieldset disabled={disabledVal}>
      <input
        id="fullName"
        name="fullName"
        value={inputs.fullName}
        onChange={handleChange}
        placeholder="Jane Doe"
        className="w-full block text-center text-2xl font-bold m-auto mb-1"
      />
      <input
        id="jobTitle"
        name="jobTitle"
        value={inputs.jobTitle}
        onChange={handleChange}
        placeholder="Senior Product Designer"
        className="w-full block text-center text-lg m-auto mb-2"
      />
      <table className="w-full ">
        <tbody>
          <tr className="flex justify-center items-center">
            <td className="text-sm px-3">
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={inputs.emailAddress}
                onChange={handleChange}
                placeholder="janedoe@gmail.com"
                className="max-w-56 text-center"
              />
            </td>
            
            <td>|</td>

            <td className="text-sm px-3 ">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={inputs.mobile}
                onChange={handleChange}
                placeholder="+880 123 606 7415"
                className="max-w-32 text-center"
              />
            </td>

            <td>|</td>

            <td className="text-sm pl-3 text-center">
              <input
                id="city"
                name="city"
                value={inputs.city}
                onChange={handleChange}
                placeholder="San Francisco"
                className="max-w-32"
              />
            </td>

            <td>,</td>

            <td className="text-sm pr-3 text-center">
              <input
                id="country"
                name="country"
                value={inputs.country}
                onChange={handleChange}
                placeholder="USA"
                className="max-w-32"
              />
            </td>
          </tr>
        </tbody>
      </table>

    </fieldset>
  );
};

export default PersonalInfo;
