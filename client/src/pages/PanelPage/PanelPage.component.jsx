import React, { useState } from "react";
import Editor from "../../components/Editor/Editor.component";

import "./PanelPage.styles.scss";

const PanelPage = () => {
  const [a, setA] = useState("a");
  const [b, setB] = useState("b");
  const [testFunction, setTestFunction] = useState(``)
  const [js, setJS] = useState(`
  const addFunction = (a,b) =>{
     return a+b
  }
  ${testFunction}
  `);

  const onTestClick = () => {
    try {
      console.log('try:',new Function(js)())
      //setTestFunction(`addFunction(1,1)`)
      if (new Function(js)() === 2) {
        console.log("correct");
      } else {
        //console.log(new Function(js)())
        console.log("wrong");
      }
      //console.log(new Function(js)());
    } catch (e) {
      console.log("try again");
    }
  };

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJS}
          clickEvent={onTestClick}
        />
      </div>
      <div className="pane"></div>
      <iframe
        frameBorder="0"
        width="100%"
        height="100%"
        title="output"
        sandbox="allow-scripts"
      />
    </>
  );
};

export default PanelPage;
