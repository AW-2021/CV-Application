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
        placeholder="Software Developer"
        className="block text-center text-lg m-auto"
      />
      <div className="flex justify-center items-center">
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={inputs.emailAddress}
          onChange={handleChange}
          placeholder="aminawasif44@outlook.com"
          className="w-56 text-center"
        />|
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={inputs.mobile}
          onChange={handleChange}
          placeholder="+90 6002135"
          className="w-28 text-center"
        />|
        <input
          id="city"
          name="city"
          value={inputs.city}
          onChange={handleChange}
          placeholder="Boston"
          className="w-28 text-right"
        />,
        <input
          id="country"
          name="country"
          value={inputs.country}
          onChange={handleChange}
          placeholder="USA"
          className="w-20"
        />
      </div>
    </fieldset>
  );
};

export default PersonalInfo;
