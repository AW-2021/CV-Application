import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  const [disabledVal, setDisabledVal] = useState("disabled");

  return (
    <div className="w-full h-screen bg-blue-100">
      <Header setDisabledVal={setDisabledVal} />
      <div className="flex justify-center pt-44 pb-14 bg-blue-100">
        <Form disabledVal={disabledVal} />
      </div>
    </div>
  );
};

export default App;
