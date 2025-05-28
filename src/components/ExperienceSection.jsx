import { useState, useRef, useLayoutEffect } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Experience from "./Experience";

const MAX_HEIGHT = 500;

const ExperienceSection = ({ disabledVal, experiences, setExperiences, handleChange, setOverflowItems }) => {
  
  const measureRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useLayoutEffect(() => {
    if (!measureRef.current) return;

    const container = measureRef.current;
    const children = Array.from(container.children);

    let totalHeight = 0;
    let splitIndex = children.length;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      totalHeight += child.offsetHeight;

      if (totalHeight > MAX_HEIGHT) {
        splitIndex = i;
        break;
      }
    }

    setVisibleItems(experiences.slice(0, splitIndex));
    setOverflowItems(experiences.slice(splitIndex));
  }, [experiences]);

  const handleClick = () => {
    setExperiences((prev) => [
      ...prev,
      {
        id: experiences.length,
        companyName: "",
        companyLocation: "",
        companyRole: "",
        jobType: "",
        expStartDate: "",
        expEndDate: "",
        expDescList: [],
      },
    ]);
  };

  

  return (
    <fieldset className="border-b-2 pb-2" disabled={disabledVal}>
      <legend className="font-bold">EXPERIENCE</legend>

      <div className="bg-pink-500 max-h-[500px] overflow-y-hidden">
        {visibleItems.map((item) => (
          <Experience
            key={item.id}
            itemIndex={item.id}
            experiences={experiences}
            setExperiences={setExperiences}
            handleChange={handleChange}
          />
        ))}
      </div>

      <div
        ref={measureRef}
        style={{
          visibility: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          width: "250px",
          padding: "10px",
          zIndex: -1,
        }}
      >
        {experiences.map((item) => (
          <Experience
            key={item.id}
            itemIndex={item.id}
            experiences={experiences}
            setExperiences={setExperiences}
            handleChange={handleChange}
          />
        ))}
      </div>

      {!disabledVal && (
        <button
          type="button"
          onClick={handleClick}
          className="w-full p-1 mb-4 mt-4 border-2 border-blue-500 rounded-full"
        >
          <BsPlusCircleFill className="inline text-lg text-blue-500 mr-2 align-text-top" />
          Add Experience
        </button>
      )}
    </fieldset>
  );
};

export default ExperienceSection;