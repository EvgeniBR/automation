import React from "react";
import MonacoEditor from "../MonacoEditor/MonacoEditor.component";

import "./Question.styles.scss";

const Question = ({location:{state}}) => {
    const {firstCode, id, question, tests} = state
    
    

  return (
    <div className="question">
         <fieldset>
          <legend>Question namber {id}</legend>
          <p>{question}</p>
        </fieldset>
        <MonacoEditor firstCode={firstCode} tests={tests} />
    </div>
  );
};

export default Question;