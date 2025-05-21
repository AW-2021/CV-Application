import { useState } from "react";
import Navbar from "./Navbar";

const Header = ({ setDisabledVal }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const buttonStyle = isEditMode ? "bg-green-300 py-2 px-4 rounded-full" : "bg-gray-300 py-2 px-4 rounded-full";

  const handleClick = (e) => {
    setIsEditMode((prevState) => !prevState);

    if (isEditMode) {
      setDisabledVal("disabled");
    } else {
      setDisabledVal("");
    }
  };

  return (
    <header className="w-full h-32 fixed top-0 bg-blue-800 shadow-lg">
      <Navbar />
      <div className="h-[45%] flex justify-between items-center px-10 bg-white ">
        <h2 className="text-lg font-bold">Your CV</h2>

        <div className="flex justify-between gap-4 text-sm font-semibold">
          <button onClick={handleClick} className={buttonStyle}>
            {isEditMode ? "Submit" : "Edit"} Template
          </button>
          <button className="bg-blue-300 py-2 px-4 rounded-full">Download CV</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
