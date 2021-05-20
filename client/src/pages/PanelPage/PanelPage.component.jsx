import React, { useState } from "react";
import Editor from "../../components/Editor/Editor.component";
import MonacoEditor from "../../components/MonacoEditor/MonacoEditor.component";

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
      const a =(testCode(1,1) === 2) ? true : false;
      const b =(testCode(1,2) === 3) ? true : false;
      const c =(testCode('1PX',1) === 2) ? false : true;
      const d =(testCode(4,1) === 5) ? true : false;
      if(a&b&c&d){
        console.log('all tests pased')
      }else{
        console.log('somteing wrnog try again')
      }
    } catch (e) {
      console.log("try again");
    }
  };

  return (
    <>
      <div className="pane top-pane">
        <fieldset>
          <legend>Question namber one</legend>
          <p>write code inside addFunction function that accepts 2 parameters and returns the added value </p>
        </fieldset>
      </div>
      <div className="pane bottom-pane">
      <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJS}
          clickEvent={onTestClick}
        />
      </div>
      <div className="pane bottom-pane">
      <MonacoEditor/>
      </div>
    </>
  );
};

export default PanelPage;
