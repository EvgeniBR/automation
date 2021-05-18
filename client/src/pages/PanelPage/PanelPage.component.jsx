import React, {useState} from "react";
import Editor from "../../components/Editor/Editor.component";

import "./PanelPage.styles.scss";

const PanelPage = () => {
  const [js, setJS] = useState('');

  const srcDoc = `
    <html>
        <script>${js}</script>
    </html>
  `

  return (
    <>
      <div className="pane top-pane">
        <Editor 
        language="javascript"
        displayName="JS"
        value={js}
        onChange={setJS}
        />   
      </div>
      <div className="pane"></div>
      <iframe 
        srcDoc={srcDoc} 
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
