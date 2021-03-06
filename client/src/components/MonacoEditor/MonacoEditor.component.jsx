/* eslint-disable no-new-func */
import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import "./MonacoEditor.styles.scss";

function MonacoEditor({ firstCode, tests, traficLightEditor,parameters }) {

  const editorRef = useRef(null);
  const [errors, setErrors] = useState("");

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function runMe() {
    console.log("asfasf");
  }
  const checkTest = (index, value, result, func) => {

   let testParams =  Object.values(value).map((k)=>{
      return Number(k);
    })

    // console.log("s : ",s.split(','));
    // console.log("func(s) :",func(1,2));
    let errorsList = "";
    if (func.apply(null,testParams) === result) errorsList += `test ${index} success`;
    else errorsList += `test ${index} failed with value : ${value}`;
    return errorsList + "\n";
  };

  const testFunction = async () => {
    try {
      let testCode = new Function(
        `${parameters}`,
        editorRef.current
          .getValue()
          .slice(
            editorRef.current.getValue().indexOf("{") + 1,
            editorRef.current.getValue().lastIndexOf("}")
          )
      );
      let errList = "";
      for (let i = 0; i < tests.length; i++)
        errList += checkTest(i + 1, tests[i].value, tests[i].result, testCode);
      checkTraficLight(errList);
      setErrors(errList);
    } catch (e) {
      console.log("oh noooo", e);
    }
  };
  const checkTraficLight = async (err) => {
    const traficLightColorPicker = { ...[err.split("\n")][0] };
    if (
      traficLightColorPicker[0] === "test 1 success" &&
      traficLightColorPicker[1] === "test 2 success"
    ) {
      traficLightEditor("green");
    } else if (
      traficLightColorPicker[0] === "test 1 success" ||
      traficLightColorPicker[1] === "test 2 success"
    ) {
      traficLightEditor("orange");
    } else {
      traficLightEditor("red");
    }
  };
  return (
    <div className="editor-container">
      <Editor
        value={firstCode}
        theme="vs-dark"
        height="50vh"
        defaultLanguage="javascript"
        onMount={handleEditorDidMount}
        options={{
          modules: true,
        }}
      />
      <button onClick={testFunction}>Show value</button>

      <div className={"new-line"}>{errors}</div>
    </div>
  );
}

export default MonacoEditor;
