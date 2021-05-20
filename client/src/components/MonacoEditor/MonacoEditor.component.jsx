import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
////import randomWords from 'random-words';

function MonacoEditor() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    try {
      let testCode = new Function('a','b' , editorRef.current.getValue().slice(editorRef.current.getValue().indexOf('{')+1,editorRef.current.getValue().indexOf('}')))  
      console.log(new Function(editorRef.current.getValue()));
      console.log(testCode(1,1));
    } catch(e){
      console.log(e,"catch !!!");
    }
  }

  return (
    <>
      <button onClick={showValue}>Show value</button>
      <Editor
        theme="vs-dark"
        height="90vh"
        defaultLanguage="javascript"
        defaultValue={`
        const test = (a,b) =>{
            return a+b
        }
        `}
        onMount={handleEditorDidMount}
      />
    </>
  );
}

export default MonacoEditor;
