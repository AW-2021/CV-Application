import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CV from "./components/pdf/CV";

const App = () => {
  const [disabledVal, setDisabledVal] = useState("disabled");

  const [inputs, setInputs] = useState({});
  const [educations, setEducations] = useState([
    {
      id: 0,
      educationInstitute: "",
      educationLocation: "",
      educationDegree: "",
      educationGrade: "",
      eduStartDate: "",
      eduEndDate: "",
      eduDescList: [],
    },
  ]);
  const [experiences, setExperiences] = useState([
    {
      id: 0,
      companyName: "",
      companyLocation: "",
      companyRole: "",
      jobType: "",
      expStartDate: "",
      expEndDate: "",
      expDescList: [],
    },
  ]);

  return (
    <div className="w-full h-screen bg-blue-100">
      <Header
        setDisabledVal={setDisabledVal}
        inputs={inputs}
        educations={educations}
        experiences={experiences}
      />
      <div className="flex justify-center pt-44 pb-14 bg-blue-100">
        <Form
          disabledVal={disabledVal}
          inputs={inputs}
          setInputs={setInputs}
          educations={educations}
          setEducations={setEducations}
          experiences={experiences}
          setExperiences={setExperiences}
        />
      </div>
      {/* <CV inputs={inputs} educations={educations} experiences={experiences} /> */}
    </div>
  );
};

export default App;
