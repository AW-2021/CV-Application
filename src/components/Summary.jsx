import { useState } from "react";

const Summary = ({ disabledVal, inputs, handleChange }) => {
  return (
    <fieldset disabled={disabledVal}>
      <legend className="bg-blue-900 w-full text-center text-white mb-3 p-0.5">SUMMARY</legend>
      <textarea
        id="summary"
        name="summary"
        value={inputs.summary}
        onChange={handleChange}
        className="w-full resize-none text-justify focus:p-2"
        placeholder="I am a Senior Product designer at CreativeMinds, creating meaningful, user-centered experiences. With a decade of design experience and a passion for pushing the boundaries of design. I design products that are not only beautiful but also functional and profitable."
      ></textarea>
    </fieldset>
  );
};

export default Summary;
