import "./App.css";
import { FieldSet, FieldSetFormComponent } from "./form-components/FieldSet";
import { useState } from "react";
import { formTemplate } from "./FormTemplate";

function App() {
  const [typeValue, setTypeValue] = useState(
    FieldSetFormComponent.defaultValue(formTemplate)
  );

  const onTypeChange = (value) => {
    setTypeValue(value);
  };

  return (
    <div className="App">
      <FieldSet
        field={formTemplate}
        onChange={onTypeChange}
        value={typeValue}
      />
      <br />
      <br />
      <br />
      <div style={{ whiteSpace: "pre-wrap", textAlign: "left", fontFamily: "monospace", fontSize: '1.2rem' }}>
        {JSON.stringify(typeValue, null, 2)}
      </div>
    </div>
  );
}

export default App;
