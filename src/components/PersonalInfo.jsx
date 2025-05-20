const PersonalInfo = ({ disabledVal, inputs, handleChange }) => {
  return (
    <fieldset disabled={disabledVal}>
      <input
        id="fullName"
        name="fullName"
        value={inputs.fullName}
        onChange={handleChange}
        placeholder="Amina Wasif"
        className="block text-center text-2xl font-bold m-auto"
      />
      <input
        id="jobTitle"
        name="jobTitle"
        value={inputs.jobTitle}
        onChange={handleChange}
        placeholder="Junior Software Developer"
        className="block text-center text-lg m-auto"
      />
      <table className="w-full">
        <tbody>
          
          <tr className="flex justify-center items-center">
            <td className="border-r-2 border-black px-3">
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={inputs.emailAddress}
                onChange={handleChange}
                placeholder="aminawasif@outlook.com"
                className="max-w-56 text-center"
              />
            </td>

            <td className="border-r-2 border-black px-3">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={inputs.mobile}
                onChange={handleChange}
                placeholder="+90 6002135"
                className="max-w-32 text-center"
              />
            </td>

            <td className="pl-3 text-center">
              <input
                id="city"
                name="city"
                value={inputs.city}
                onChange={handleChange}
                placeholder="Boston"
                className="max-w-20"
              />
            </td>

            <td>,</td>

            <td className="px-3 text-center">
              <input
                id="country"
                name="country"
                value={inputs.country}
                onChange={handleChange}
                placeholder="USA"
                className="max-w-20"
              />
            </td>
          </tr>
        </tbody>
      </table>

    </fieldset>
  );
};

export default PersonalInfo;
