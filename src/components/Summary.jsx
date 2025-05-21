import { useState } from "react";

const Summary = ({ disabledVal, inputs, handleChange }) => {
  const [rowNumber, setRowNumber] = useState(1);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setRowNumber((prevNumber) => prevNumber + 1);
    } 
  }

  return (
    <fieldset className="border-b-2 pb-2" disabled={disabledVal}>
      <legend className="font-bold">SUMMARY</legend>
      <textarea
        id="summary"
        name="summary"
        rows={rowNumber}
        value={inputs.summary}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full overflow-y-hidden resize-none focus:p-2"
      ></textarea>
    </fieldset>
  );
};

export default Summary;
