const PersonalInfo = ({ disabledVal, inputs, handleChange }) => {
  return (
    <fieldset disabled={disabledVal} className="pt-4 pb-2">
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
      <table className="md:w-4/5 w-full m-auto">
        <tbody>
          <tr className="text-sm text-center">
            <td className="w-1/3 border-r-2 border-black py-0">
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={inputs.emailAddress}
                onChange={handleChange}
                placeholder="janedoe@gmail.com"
                className="text-center"
              />
            </td>

            <td className="w-1/3 border-r-2 border-black py-0">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={inputs.mobile}
                onChange={handleChange}
                placeholder="+880 123 606 7415"
                className="text-center"
              />
            </td>

            <td className="w-1/3 py-0">
              <input
                id="city"
                name="city"
                value={inputs.city}
                onChange={handleChange}
                placeholder="San Francisco"
                className="md:w-[55%] w-[65%] text-right"
              />{", "}
              <input
                id="country"
                name="country"
                value={inputs.country}
                onChange={handleChange}
                placeholder="USA"
                className="md:w-[40%] w-[25%]"
              />
            </td>
          </tr>
        </tbody>
      </table>

    </fieldset>
  );
};

export default PersonalInfo;
