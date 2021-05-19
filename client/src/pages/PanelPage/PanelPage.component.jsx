import React, { useState } from "react";
import Editor from "../../components/Editor/Editor.component";

import "./PanelPage.styles.scss";

const PanelPage = () => {
  // const [a, setA] = useState("a");
  // const [b, setB] = useState("b");
  // const [testFunction, setTestFunction] = useState(``)
  const [js, setJS] = useState(`
  const addFunction = (a,b) =>{
     return a+b
  }

  `);

  const onTestClick = () => {
    try {

      let testCode = new Function('a','b' , js.slice(js.indexOf('{')+1,js.indexOf('}')))
      console.log( testCode(1,1))
      if (testCode(1,1) === 2) {
        console.log("correct");
      } else {
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
