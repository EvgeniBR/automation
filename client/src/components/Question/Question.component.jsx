import React, { useEffect } from "react";
import MonacoEditor from "../MonacoEditor/MonacoEditor.component";

import "./Question.styles.scss";

const Question = ({ location: { state } }) => {
  const { firstCode, id, question, tests, parameters } = state;
  const [color, setColor] = React.useState("red");
  const traficLightEditor = (color) => {
    setColor(color);
  };
  useEffect(() => {
    setColor("red");
  }, [state]);
  return (
    <div className="question">
      <fieldset>
        <legend>
          &nbsp;Question namber {id}{" "}
          <span style={{ color: `${color}` }}>&nbsp;&#11044; </span>&nbsp;{" "}
        </legend>
        <p>{question}</p>
      </fieldset>
      <MonacoEditor
        traficLightEditor={(color) => traficLightEditor(color)}
        firstCode={firstCode}
        tests={tests}
        parameters={parameters}
      />
    </div>
  );
};

export default Question;
