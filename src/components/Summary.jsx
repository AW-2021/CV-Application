
const Summary = ({ disabledVal, inputs, handleChange }) => {
  return (
    <fieldset className="border-b-2 pb-2" disabled={disabledVal}>
        <legend className="font-bold">SUMMARY</legend>
        <input
          id="summary"
          name="summary"
          value={inputs.summary}
          onChange={handleChange}
          className="w-full focus:p-2"
        />
    </fieldset>
  );
}

export default Summary;